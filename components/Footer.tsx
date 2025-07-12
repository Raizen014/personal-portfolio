import { FaArrowUp } from "react-icons/fa";

export default function Footer() {
  return (
    <footer className="footer footer-center gap-2 p-4 bg-base-100 text-base-content">
     <a href="#home" className="flex hover:text-accent font-bold">To the top<FaArrowUp /></a>
      <aside className="gap-1 mt-2">
        <p> Copyright © 2025 | All rights reserved.</p>
        <p> Developed by: Aeron Garcia</p>
      </aside>
    </footer>
  )
}
