const FooterComponent = () => {
    return (
        <footer className="footer items-center p-4">
            <aside className="grid-flow-col items-center">
                <p>Justin Oswald - {new Date().getFullYear()}</p>
            </aside>
            <nav className="grid-flow-col gap-4 md:place-self-center md:justify-self-end">
                <a href="https://www.linkedin.com/in/justin-oswald-606737261/">
                    <img id="li" style={{ margin: "0px 0px 0px 25px" }} src="/justinozzy.github.io/linkedin.png" width="50" height="50" />
                </a>
                <a href="https://github.com/justinozzy">
                    <img id="gh" src="/justinozzy.github.io/github.png" width="50" height="50" />
                </a>
            </nav>
        </footer>
    )
}

export default FooterComponent;