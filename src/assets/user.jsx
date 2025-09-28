export default function TablerUser({ imgUrl, alt }) {
  return (
    <a
      href="/YourAccount"
      role="button"
      tabIndex={0}
      aria-haspopup="true"
      aria-expanded="false"
      aria-label="Cuenta y configuración"
    >
      <span className="profile-link" role="presentation">
        <img
          className="profile-icon"
          src={imgUrl}
          alt={alt || "User profile"}
        />
      </span>
    </a>
  );
}