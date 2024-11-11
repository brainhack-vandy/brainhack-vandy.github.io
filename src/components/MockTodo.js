import issues from '../data/issues.json';


export default function MockTodo() {
    return (
        <div>
            <h1>Mock Todo</h1>
            <ul>
                {issues.map((issue, index) => (
                    <li key={index}>
                        <h3>{issue.title}</h3>
                        <p>{issue.body}</p>
                    </li>
                ))}
            </ul>
        </div>
    );
}