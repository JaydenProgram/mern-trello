import { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import css from "./Record.module.css"; // 👈 import the css module

export default function Record() {
    const [form, setForm] = useState({ name: "", position: "", level: "" });
    const [isNew, setIsNew] = useState(true);
    const params = useParams();
    const navigate = useNavigate();

    useEffect(() => {
        async function fetchData() {
            const id = params.id?.toString() || undefined;
            if (!id) return;
            setIsNew(false);
            const response = await fetch(`http://localhost:5050/record/${params.id}`);
            if (!response.ok) {
                console.error(`An error has occurred: ${response.statusText}`);
                return;
            }
            const record = await response.json();
            if (!record) {
                console.warn(`Record with id ${id} not found`);
                navigate("/");
                return;
            }
            setForm(record);
        }
        fetchData();
    }, [params.id, navigate]);

    function updateForm(value) {
        return setForm((prev) => ({ ...prev, ...value }));
    }

    async function onSubmit(e) {
        e.preventDefault();
        const person = { ...form };
        try {
            let response;
            if (isNew) {
                response = await fetch("http://localhost:5050/record", {
                    method: "POST",
                    headers: { "Content-Type": "application/json" },
                    body: JSON.stringify(person),
                });
            } else {
                response = await fetch(`http://localhost:5050/record/${params.id}`, {
                    method: "PATCH",
                    headers: { "Content-Type": "application/json" },
                    body: JSON.stringify(person),
                });
            }
            if (!response.ok) throw new Error(`HTTP error! status: ${response.status}`);
        } catch (error) {
            console.error("A problem occurred with your fetch operation: ", error);
        } finally {
            setForm({ name: "", position: "", level: "" });
            navigate("/");
        }
    }

    return (
        <>
            <h3 className={css.heading}>Create/Update Employee Record</h3>
            <form onSubmit={onSubmit} className={css.form}>
                <div className={css.section}>
                    <div>
                        <h2 className={css.sectionTitle}>Employee Info</h2>
                        <p className={css.sectionSubtitle}>
                            This information will be displayed publicly so be careful what you
                            share.
                        </p>
                    </div>

                    <div>
                        <div>
                            <label htmlFor="name" className={css.label}>
                                Name
                            </label>
                            <div className={css.inputWrapper}>
                                <input
                                    type="text"
                                    id="name"
                                    value={form.name}
                                    onChange={(e) => updateForm({ name: e.target.value })}
                                    className={css.input}
                                    placeholder="First Last"
                                />
                            </div>
                        </div>

                        <div>
                            <label htmlFor="position" className={css.label}>
                                Position
                            </label>
                            <div className={css.inputWrapper}>
                                <input
                                    type="text"
                                    id="position"
                                    value={form.position}
                                    onChange={(e) => updateForm({ position: e.target.value })}
                                    className={css.input}
                                    placeholder="Developer Advocate"
                                />
                            </div>
                        </div>

                        <fieldset className={css.radioGroup}>
                            <legend className="sr-only">Position Options</legend>
                            {["Intern", "Junior", "Senior"].map((level) => (
                                <div key={level} className="flex items-center">
                                    <input
                                        type="radio"
                                        id={`position${level}`}
                                        name="positionOptions"
                                        value={level}
                                        checked={form.level === level}
                                        onChange={(e) => updateForm({ level: e.target.value })}
                                        className={css.radioInput}
                                    />
                                    <label
                                        htmlFor={`position${level}`}
                                        className={css.radioLabel}
                                    >
                                        {level}
                                    </label>
                                </div>
                            ))}
                        </fieldset>
                    </div>
                </div>

                <input
                    type="submit"
                    value="Save Employee Record"
                    className={css.submit}
                />
            </form>
        </>
    );
}
