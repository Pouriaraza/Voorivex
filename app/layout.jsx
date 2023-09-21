import "../styles/style.scss";
import "../styles/style.css";
import Home from "./page"
export const layout = () => {
    return (
        <html lang='en'>
            <body>
                <main className='app'>
                    <Home />
                </main>
            </body>
        </html>
    )
}

export default layout;

