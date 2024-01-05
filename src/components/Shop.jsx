export default function Shop({ children }) {

  return (
    <section id="shop">
      <h2>Delicious meals for Everyone</h2>
      <ul id="meals">{children}</ul>
    </section>
  );
}
