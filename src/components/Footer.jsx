export default function Footer() {
  return (
    <footer className='footer'>
      <small>&copy; Copyright by vladis.lt</small>
      <small>{new Date().getFullYear()}</small>
    </footer>
  );
}
