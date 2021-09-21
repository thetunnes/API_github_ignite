import { useState, useEffect } from 'react'
import '../styles/repositories.scss'
import { RepositoryItem } from './RepositoryItem'

type Repository = {
    id: string;
    name: string,
    full_name: string,
    description: string,
    html_url: string,
}

export function RepositoryList() {

    const [repositories, setRepositories] = useState<Repository[]>([])

    useEffect(() => {
        fetch('https://api.github.com/orgs/rocketseat/repos')
        .then(response => response.json())
        .then(data => setRepositories(data))
    }, [repositories])

    return (
        <section className="repositoryList">
            <h1>My repository list</h1>

            <ul>
                {repositories.map(repository =>  <RepositoryItem key={repository.id} repository={repository} />)}


            </ul>
        </section>
    )
}