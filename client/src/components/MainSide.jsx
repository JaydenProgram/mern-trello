import css from "./MainSide.module.css";

export default function MainSide() {

    return (
        <>
            <main className={css.main}>
                <nav className={css.buttons}>
                    <button className={css.sideButton}>Board</button>
                    <button className={css.sideButton}>Home</button>
                </nav>
                <hr/>
                <h1 className={css.title}>Projects</h1>
                <section className={css.mainProjects}>
                    <article className={css.projectButton}>
                        <img src="https://placehold.co/600x400" alt="" className={css.projectImage}/>
                        <p>
                            Side projects
                        </p>
                    </article>
                    <article className={css.projectButton}>
                        <img src="https://placehold.co/600x400" alt="" className={css.projectImage}/>
                        <p>
                            Side projects
                        </p>
                    </article>
                </section>
            </main>
        </>
    )
}
