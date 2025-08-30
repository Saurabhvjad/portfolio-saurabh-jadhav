export default function Footer() {
  return (
    <footer className="w-full py-6 text-center text-muted-foreground text-sm border-t border-border/40">
      <div className="container mx-auto">
        <p>&copy; {new Date().getFullYear()} Saurabh Jadhav. All rights reserved.</p>
      </div>
    </footer>
  );
}
