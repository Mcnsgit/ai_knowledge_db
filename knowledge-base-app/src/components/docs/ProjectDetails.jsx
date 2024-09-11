// src/components/ProjectDetails.js
import React from 'react';
import { useQuery } from 'react-query';
import axios from 'axios';

const fetchProjects = async () => {
    const { data } = await axios.get('http://localhost:3001/api/projects');
    return data;
};

const ProjectDetails = () => {
    const { data: projects, isLoading, error } = useQuery('projects', fetchProjects);

    if (isLoading) return <p>Loading...</p>;
    if (error) return <p>Error loading projects: {error.message}</p>;

    return (
        <div>
            <h1>Project Details</h1>
            <ul>
                {projects.data.map(project => (
                    <li key={project.id}>
                        <h2>{project.attributes.name}</h2>
                        <p>{project.attributes.description}</p>
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default ProjectDetails;