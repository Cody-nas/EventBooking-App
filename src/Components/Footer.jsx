const Footer = () => {
  return (
    <div>
      {/* Footer */}
      <footer className="bg-gray-900 text-gray-300 py-10 text-center">
        <p>
          &copy; {new Date().getFullYear()} The Martin's Ticket. All rights
          reserved.
        </p>
      </footer>
    </div>
  );
};

export default Footer;
