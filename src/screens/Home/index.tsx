import React, { useState } from "react";
import { Alert, Image, TextInput, TouchableOpacity, View } from "react-native";
import { styles } from './styles';

import AddIcon from '../../../assets/images/addIcon.svg'
import MainLogo from '../../../assets/images/mainLogo.svg'
import List from "../../../components/List";

export default function Home() {

    const Tasks = [
        {
            id: 1695576952000,
            content: "Lavar a louça",
            isChecked: false
        },
        {
            id: 1695576951000,
            content: "Tomar café da manhã",
            isChecked: false
        },
        {
            id: 1695576950100,
            content: "Escovar os dentes",
            isChecked: false
        },
        {
            id: 1695576950050,
            content: "Arrumar a cama",
            isChecked: true
        }
    ]

    const [textInputIsFocused, setTextInputIsFocused] = useState(false);
    const [taskList, setTaskList] = useState(Tasks)
    const [inputContent, setInputContent] = useState('')


    function addNewTask() {

        const taskCreated = {
            id: new Date().getTime(),
            content: inputContent,
            isChecked: false
        }

        if (taskCreated.content) {
            const refreshedTaskList = [...taskList, taskCreated]

            console.log(refreshedTaskList)

            setTaskList(refreshedTaskList)
            setInputContent('') 
        } else {
            Alert.alert("Você não pode inserir uma tarefa vazia.")
        }
        
    }

    function deleteTask(id: number) {
        const refreshedTaskList = taskList.filter(task => {
            return task.id != id
        })
        console.log(refreshedTaskList)
        setTaskList(refreshedTaskList)
    }

    function changeStatusTask(id: number) {
        const refreshedTaskList = taskList.map(task => {
            if (task.id === id) {
                task.isChecked = !task.isChecked
            }
            return task
        })
        setTaskList(refreshedTaskList)
    }

    return(
        <>
            <View style={styles.header}>

                <MainLogo style={styles.logo}/>

            </View>
            <View style={styles.body}> 
                <View style={styles.form}>

                    <TextInput 
                        style={[styles.input, {
                            borderColor: textInputIsFocused
                            ? '#5E60CE'
                            : 'black'
                        }]}   
                        selectionColor={'#F2F2F2'}
                        placeholder="Adicione uma nova tarefa"
                        placeholderTextColor="#808080"
                        onFocus={() => setTextInputIsFocused(true)}
                        onBlur={() => setTextInputIsFocused(false)}

                        onChangeText={setInputContent}
                        value={inputContent}
                    />

                    <TouchableOpacity 
                        style={styles.button}
                        onPress={() => addNewTask()}
                    >

                        <AddIcon />

                    </TouchableOpacity>

                </View>
            
                <List 
                    content={taskList}
                    onDeleteTask={deleteTask}
                    onChangeStatusTask={changeStatusTask}
                />
                
            </View>

        </>      
    )
}