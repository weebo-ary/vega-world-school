const DRIVE_FILE_ID = "1BHDWRDhKj95PGqROUHWc_LFq6kql-OFQ";

export const dynamic = "force-dynamic";

function decodeHtml(value) {
  return value
    .replaceAll("&amp;", "&")
    .replaceAll("&quot;", '"')
    .replaceAll("&#39;", "'")
    .replaceAll("&lt;", "<")
    .replaceAll("&gt;", ">");
}

function getDriveConfirmationUrl(html) {
  const formActionMatch = html.match(/<form[^>]+action="([^"]+)"/i);
  if (formActionMatch) {
    const action = decodeHtml(formActionMatch[1]);
    const params = new URLSearchParams();

    for (const match of html.matchAll(/<input[^>]+name="([^"]+)"[^>]+value="([^"]*)"/gi)) {
      params.set(decodeHtml(match[1]), decodeHtml(match[2]));
    }

    return `${action}?${params.toString()}`;
  }

  const hrefMatch = html.match(/href="([^"]*(?:uc|download)[^"]*confirm=[^"]+)"/i);
  if (hrefMatch) {
    return decodeHtml(hrefMatch[1]);
  }

  return null;
}

export async function GET(request) {
  const range = request.headers.get("range");
  const driveUrl = `https://drive.google.com/uc?export=download&id=${DRIVE_FILE_ID}`;

  let upstream = await fetch(driveUrl, {
    headers: {
      ...(range ? { range } : {}),
      "user-agent":
        "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 Chrome/120 Safari/537.36",
    },
    redirect: "follow",
  });

  const contentType = upstream.headers.get("content-type") || "";

  if (contentType.includes("text/html")) {
    const html = await upstream.text();
    const confirmationUrl = getDriveConfirmationUrl(html);

    if (!confirmationUrl) {
      return new Response("Google Drive did not provide a downloadable video response.", {
        status: 502,
        headers: { "content-type": "text/plain" },
      });
    }

    const cookie = upstream.headers.get("set-cookie");
    upstream = await fetch(confirmationUrl, {
      headers: {
        ...(range ? { range } : {}),
        ...(cookie ? { cookie } : {}),
        "user-agent":
          "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 Chrome/120 Safari/537.36",
      },
      redirect: "follow",
    });
  }

  const headers = new Headers();
  const passThroughHeaders = ["content-length", "content-range", "accept-ranges"];

  for (const header of passThroughHeaders) {
    const value = upstream.headers.get(header);
    if (value) {
      headers.set(header, value);
    }
  }

  headers.set("accept-ranges", headers.get("accept-ranges") || "bytes");
  headers.set("cache-control", "public, max-age=86400, stale-while-revalidate=604800");
  headers.set("content-type", upstream.headers.get("content-type") || "video/mp4");

  return new Response(upstream.body, {
    status: upstream.status,
    headers,
  });
}
