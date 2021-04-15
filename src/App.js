import { useState } from 'react';
import styled from 'styled-components'
import { FaSearch as SearchIcon, FaImages as ImagesIcon } from 'react-icons/fa'
import './App.css'

function App() {
  const [index, setIndex] = useState(0)

  return (
    <SpiderCard className='SpiderCard'>
      <Title className='Title'>
        <p>Titulo</p>
      </Title>
      <TabBoard className='TabBoard'>
        <TabList className='TabList'>
          <Tab 
            className={`Tab Localizar ${index===0 ? 'tab-selected': ''}`}
            onClick={()=>{setIndex(0)}}
          >
            <SearchIcon />
            <span>Localizar</span>
          </Tab>
          <Tab 
            className={`Tab Imagens ${index===1 ? 'tab-selected': ''}`}
            onClick={()=>{setIndex(1)}}
          >
            <ImagesIcon />
            <span>Imagens</span>
          </Tab>
        </TabList>
        <TabPanelList className='TabPanelList'>
          <TabPanel className={`TabPanel Localizar green ${index===0 ? 'tab-panel-selected': ''}`}>
            <p>Painel Localizar</p>
          </TabPanel>
          <TabPanel className={`TabPanel Imagens brown ${index===1 ? 'tab-panel-selected': ''}`}>
            <p>Painel Imagens</p>
          </TabPanel>
        </TabPanelList>
      </TabBoard>
    </SpiderCard>
  );
}

const SpiderCard = styled.div`
  width: 300px;
  height: 500px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  box-shadow: 0 1px 2px lightgray;
  /* background: lightgray; */
  border-radius: 5px;
  border: 1px solid lightgray;
  padding: 5px;
  margin: 10rem auto;
  transition: box-shadow 0.3s ease-in-out, width 0.3s ease-in-out,
    border 0.3s ease-in-out;
  &:hover {
    box-shadow: 0 10px 16px gray;
  }
`

const Title = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 3px;
  box-shadow: 0px 1px 2px #aaa;
  height: 38px;
  background-color: #1976d2;
  color: white;
  font-weight: 900;
  font-size: 1.3rem;
  font-family: 'Open Sans',-apple-system,BlinkMacSystemFont,'Segoe UI', 'Helvetica Neue',Arial,sans-serif;
`

const TabBoard = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  height: 100%;
  color: black;
  /* border: 0 solid #aaa;
  border-left-width: 1px;
  border-right-width: 1px;
  border-bottom-width: 1px; */
`

const Tab = styled.div`
  display: flex;
  align-items: center;
  background-color: white;
  color: #115293;
  border: 1px solid transparent;
  height: 2.5rem;
  padding: 0 1rem;
  min-width: 8rem;
  column-gap: 0.5em;
  border-bottom: none;
  line-height: 1.5rem;
  position: relative;
  cursor: pointer;
  font-weight: 400;

  :focus, :hover {
    box-shadow: 0 0 2px hsl(0deg 0% 71%);
    border-color: hsl(0, 0%, 71%);
    outline: none;
    border-radius: 5px 5px 0 0;
  }
`
const TabList = styled.div`
  display: flex;
  flex-direction: row;
  border-bottom: 1px solid #aaa;
  margin: 5px 0 10px;
  padding: 0;
  font-weight: 400;
  column-gap: 0;
  background: transparent;
`

const TabPanelList = styled.div`
  position: relative;
  background-color: aquamarine;
`

const TabPanel = styled.div`
  position: absolute;
  display: flex;
  flex-direction: column;
  height: 25rem;
  width: 100%;
  align-items: center;
  justify-content: center;
  border-radius: 5px;
  top: -5px;
  visibility: hidden;
`

export default App;
