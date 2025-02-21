const GetTechImage = ({ logo, size = null }) => {
    switch (logo) {
        case 'javascript': {
            return (
                <img src="https://upload.wikimedia.org/wikipedia/commons/6/6a/JavaScript-logo.png"
                    alt="JavaScript Logo"
                    className="tech-logo"
                    title="JavaScript"
                    style={{ width: size == null ? "15px" : size, height: size == null ? "15px" : size }} />
            );
        }
        case 'typescript': {
            return (
                <img src="https://raw.githubusercontent.com/remojansen/logo.ts/master/ts.png"
                    alt="TypeScript Logo"
                    className="tech-logo"
                    title="TypeScript"
                    style={{ width: size == null ? "15px" : size, height: size == null ? "15px" : size }} />
            );
        }
        case 'c++': {
            return (
                <img src="https://upload.wikimedia.org/wikipedia/commons/1/18/C_Programming_Language.svg"
                    alt="C++ Logo"
                    className="tech-logo"
                    title="C++"
                    style={{ width: size == null ? "15px" : size, height: size == null ? "15px" : size }} />
                );
        }
        case 'c#': {
            return (
                <img src="https://upload.wikimedia.org/wikipedia/commons/4/4f/Csharp_Logo.png"
                    alt="C# Logo"
                    className="tech-logo"
                    title="C#"
                    style={{ width: size == null ? "27px" : size, height: size == null ? "27px" : size }} />
                );
        }
        case 'rust': {
            return (
                <i className="fab fa-rust tech-logo" title="Rust"></i>
            );
        }
        case 'react': {
            return (
                <img src="https://upload.wikimedia.org/wikipedia/commons/a/a7/React-icon.svg"
                    alt="React Logo"
                    className="tech-logo"
                    title="React"
                    style={{ width: size == null ? "15px" : size, height: size == null ? "15px" : size }} />
                );
        }
        case 'node.js': {
            return (
                <img src="https://upload.wikimedia.org/wikipedia/commons/d/d9/Node.js_logo.svg"
                    alt="Node.js Logo"
                    className="tech-logo"
                    title="Node.js"
                    style={{ width: size == null ? "15px" : size, height: size == null ? "15px" : size }} />
                );
        }
        case 'database': {
            return (
                <i className="fas fa-database tech-logo" title="MySQL"></i>
            );
        }
        case 'html': {
            return (
                <img src="https://upload.wikimedia.org/wikipedia/commons/6/61/HTML5_logo_and_wordmark.svg"
                    alt="HTML Logo"
                    className="tech-logo"
                    title="HTML"
                    style={{ width: size == null ? "15px" : size, height: size == null ? "15px" : size }} />
                );
        }
        case 'css': {
            return (
                <img src="https://upload.wikimedia.org/wikipedia/commons/d/d5/CSS3_logo_and_wordmark.svg"
                    alt="CSS Logo"
                    className="tech-logo"
                    title="CSS"
                    style={{ width: size == null ? "15px" : size, height: size == null ? "15px" : size }} />
                );
        }
        case 'bootstrap': {
            return (
                <img src="https://upload.wikimedia.org/wikipedia/commons/b/b2/Bootstrap_logo.svg"
                    alt="Bootstrap Logo"
                    className="tech-logo"
                    title="Bootstrap"
                    style={{ width: size == null ? "15px" : size, height: size == null ? "15px" : size }} />
                );
        }
        case 'git': {
            return (
                <i className="fab fa-git tech-logo" title="Git"></i>
            );
        }
        case 'github': {
            return (
                <i className="fab fa-github tech-logo" title="GitHub"></i>
            );
        }
        case 'supabase': {
            return (
                <img src="https://raw.githubusercontent.com/supabase/supabase/master/packages/common/assets/images/supabase-logo.svg"
                    alt="Supabase Logo"
                    className="tech-logo"
                    title="Supabase"
                    style={{ width: size == null ? "15px" : size, height: size == null ? "15px" : size }} />
            );
        }
        case 'next.js': {
            return (
                <img src="https://assets.vercel.com/image/upload/v1662130559/nextjs/icon.png"
                    alt="Next.js Logo"
                    className="tech-logo"
                    title="Next.js"
                    style={{ width: size == null ? "15px" : size, height: size == null ? "15px" : size }} />
            );
        }
        case 'tailwind': {
            return (
                <img src="https://upload.wikimedia.org/wikipedia/commons/d/d5/Tailwind_CSS_Logo.svg"
                    alt="Tailwind CSS Logo"
                    className="tech-logo"
                    title="Tailwind CSS"
                    style={{ width: size == null ? "15px" : size, height: size == null ? "15px" : size }} />
            );
        }
        default: {
            return (
                <img src="https://upload.wikimedia.org/wikipedia/commons/a/a7/React-icon.svg"
                    alt="React Logo"
                    className="tech-logo"
                    title="React"
                    style={{ width: size == null ? "15px" : size, height: size == null ? "15px" : size }} />
                );
        }
    }

}

export default GetTechImage;