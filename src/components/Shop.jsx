export default function Shop({ children }) {

  return (
    <section className="main-header control">
      <h1>Delicious meals for Everyone</h1>
      <ul id="meals">{children}</ul>
    </section>
  );
}
