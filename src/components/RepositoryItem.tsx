type RepositoryItemProps = {
    repository: {

        name: string,
        full_name: string,
        description: string,
        html_url: string,
    }
}

export function RepositoryItem(props: RepositoryItemProps) {

    return (
        <li>
            <strong>{props.repository?.name}</strong>
            <p>{props.repository.description}</p>

            <a href={props.repository.html_url} target="_blank">{props.repository.full_name}</a>
        </li>
    )
}