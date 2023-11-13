import NewProject from "./components/NewProject.jsx";
import NoProjectSelected from "./components/NoProjectSelected.jsx";
import ProjectSidebar from "./components/ProjectsSidebar.jsx";
import { useState } from 'react';
import SelectedProject from "./components/SelectedProject.jsx";

function App() {
  const [projectState, setProjectState] = useState({selectedProject: undefined, projects:[]})

  function handleStartAddProject () {
    setProjectState(prev => {
      return {
        ...prev,
        selectedProject: null,
      }
    })
  }

  function handleProjectDelete (id) {
    setProjectState(prev => {return {
      selectedProject: undefined,
      projects: projectState.projects.splice(id, 1)
    }})
  }

  function handleCancleAddProject () {
    setProjectState(prev => {
      return{
        ...prev,
        selectedProject: undefined,
      }
    })
  }

  function handleAddProject (projectData) {
    setProjectState(prev => {
      return {
        selectedProject: undefined,
        projects: [...prev.projects, {...projectData, id:prev.projects.length}]
      }
    })
  }

  function handleSelectProject (id) {
    setProjectState(prev => {
      return {
        ...prev,
        selectedProject: id,
      }
    })
  }

  let content;
  if (projectState.selectedProject === null) {
    content = <NewProject handleAddProject={handleAddProject} handleCancleAddProject={handleCancleAddProject}/>
  } else if (projectState.selectedProject === undefined) {
    content = <NoProjectSelected onStartAddProject={handleStartAddProject} handleAddProject={handleAddProject}/>
  } else {
    content = <SelectedProject project={projectState.projects[projectState.selectedProject]} handleProjectDelete={handleProjectDelete}/>
  }

  console.log(projectState)

  return (
    <main className="h-screen my-8 flex gap-8">
      <ProjectSidebar onStartAddProject={handleStartAddProject} projects={projectState.projects} handleSelectProject={handleSelectProject}/>
      {content}
    </main>
  );
}

export default App;