import React from "react";
import {
    Container,
    Heading,
    Project,
    Item,
    Wrapper,
    ImageContainer,
    Image,
    InfoContainer,
    Title,
    Desc,
    Button,
    ButtonContainer,
} from "./style";
import netflix from "../../img/netflix.png";
import ecart from '../../img/ecart.png'
import hygge from '../../img/hygge.png'
import olx from '../../img/olx.png'
import { SiGithub } from "react-icons/si";

const projects = [
    {
        name: 'Hygge',
        desc: 'Currently developing a user-friendly social media website using MERN stack. Implemented Socket.io for real-time chatting, Redux toolkit for state management, JWT for authentication.',
        github: 'https://github.com/neeraja-anil/hygge-social-media-mern',
        image: hygge
    },
    {
        name: 'E-cart',
        desc: 'Developed a functional and user-friendly E-Commerce website managing both admin and user side.',
        github: 'https://github.com/neeraja-anil/ecart-mern-project',
        // site: 'https://ecart.ltd',
        image: ecart,
    },
    {
        name: 'Netflix Clone',
        desc: 'Developed a functional Netfilx Clone Website using React.js and TMDB API.',
        github: 'https://github.com/neeraja-anil/Netflix-clone-react',
        image: netflix
    },
    {
        name: 'OLX Clone',
        desc: 'Developed a functional OLX Clone website using React.js and google firebase as backend and database.',
        github: 'https://github.com/neeraja-anil/olx-clone-react',
        image: olx
    },


]

const Projects = () => {
    return (
        <Container id="projects">
            <Wrapper>
                <Heading>Projects</Heading>
                <Project>
                    {
                        projects.map((project, index) => {
                            return (
                                <Item key={index}>
                                    <ImageContainer>
                                        <Image src={project.image} />
                                    </ImageContainer>
                                    <InfoContainer>
                                        <Title>{project.name}</Title>
                                        <Desc>
                                            {project.desc}
                                        </Desc>
                                        <ButtonContainer>
                                            <a
                                                href={project.github}
                                                style={{ textDecoration: "none" }}
                                            >
                                                <Button>
                                                    View Project <SiGithub style={{ marginLeft: "10px" }} />
                                                </Button>
                                            </a>
                                            <a
                                                href={project.site}
                                                style={{ textDecoration: "none" }}
                                            >
                                                {
                                                    project.site &&
                                                    <Button>Visit Site</Button>
                                                }
                                            </a>
                                        </ButtonContainer>
                                    </InfoContainer>
                                </Item>
                            )
                        })
                    }
                </Project>
            </Wrapper>
        </Container>
    );
};

export default Projects;
