import { FaArrowUp } from "react-icons/fa";

export default function Footer() {
  return (
    <footer className="footer footer-center gap-2 p-4 bg-base-100 text-base-content">
     <a href="#home" className="flex hover:text-accent font-bold">To the top<FaArrowUp /></a>
      <aside>
        <p>© 2025 Aeron Garcia. All rights reserved.</p>
      </aside>
    </footer>
  )
}
