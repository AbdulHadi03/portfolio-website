import React from 'react';
import './Projects.css';
import project1 from './img/Project1.png';
const projects = [
    {
        title: 'Student Helpdesk',
        description: 'The Student Helpdesk project is an AI-powered academic assistance platform integrating Retrieval-Augmented Generation (RAG) with LangChain and OpenAI’s language models. It provides tailored support for academic inquiries by offering direct links to essential resources and enabling escalation to human advisors for complex issues. The system achieved 85% efficiency over standard models, outperforming ChatGPT in relevance and effectiveness.',
        imageUrl: project1,
        link: 'https://github.com/AbdulHadi03/StudentHelpdesk'
        // ... other project properties
    },
    {
        title: 'Pantry Connect',
        description: 'Pantry Connect is a MERN stack application designed to facilitate inter-pantry communication and inventory management. It enables two pantries to connect, add, and delete inventories while also providing a feature to calculate a midpoint for meetings between them. The project is a collaborative effort with four team members, and you are leading the development.',
        imageUrl: project1,
       
        // ... other project properties
    },
    {
        title: 'Cancer Prediction via KNN',
        description: 'Cancer Prediction via KNN is a data science project that utilizes the K-Nearest Neighbors (KNN) algorithm to classify cancer diagnoses. The project involved downloading a Breast Cancer dataset from Kaggle, preprocessing the data, and applying KNN to predict whether a tumor is benign or malignant.',
        imageUrl: project1,
        // ... other project properties
    },
    {
        title: 'Data Science Project',
        description: 'Work under progress',
        imageUrl: project1,
        // ... other project properties
    },
    // Add more projects here
];

const Projects = () => {
    return (
        <div className="projects-container">
            {projects.map((project, index) => (
                <div key={index} className="project-card">
                    <img src={project.imageUrl} alt={project.title} />
                    <h2>{project.title}</h2>
                    <p>{project.description}</p>
                    {/* Add more project card elements here */}
                </div>
            ))}
        </div>
    );
};

export default Projects;
