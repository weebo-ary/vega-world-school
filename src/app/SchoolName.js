export default function SchoolName({ className = "" }) {
  return (
    <span className={`school-name ${className}`.trim()}>
      <span className="school-name-the">The</span>{" "}
      <span className="school-name-vega">Vega</span>
      <span className="school-name-world">World</span>{" "}
      <span className="school-name-school">School</span>
    </span>
  );
}
