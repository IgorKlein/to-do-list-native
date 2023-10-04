import { FlatList, Text, View } from 'react-native';
import { styles } from './styles';
import Task from '../Task';
import Trash from '../../assets/images/trash.svg'

interface Task {
    id: number,
    content: string,
    isChecked: boolean
}

interface ListProps {
    content: Task[]
    onDeleteTask: (id: number) => void
    onChangeStatusTask: (id: number) => void
}

export default function List(List: ListProps) {

    const taskList = List.content 

    const tasksCounter = taskList.length
    const tasksCheckedCounter = taskList.filter(
        task => task.isChecked === true).length

    function changeTaskStatus(id: number) {
        List.onChangeStatusTask(id)
    }

    function handleDeleteTask(id: number) {
        List.onDeleteTask(id)
    }

    return(
        <>
            <View style={styles.panel}>

                <View style={styles.panelItem}>

                    <Text 
                        style={[styles.panelText,{
                            color: '#4EA8DE'
                        }]}>Criadas</Text>

                    <View style={styles.panelCounter}>
                        <Text style={styles.panelCounterText}>
                            {tasksCounter}
                        </Text>
                    </View>

                </View>

                <View style={[styles.panelItem,{
                    justifyContent: 'flex-end'
                }]}>

                    <Text 
                        style={[styles.panelText,{
                            color: '#8284FA'
                        }]}>Concluídas</Text>

                    <View style={styles.panelCounter}>
                        <Text style={styles.panelCounterText}>
                                {tasksCheckedCounter}
                        </Text>
                    </View>

                </View>
            </View>

            <FlatList 
                data={taskList}
                keyExtractor ={item => String(item.id)}
                renderItem={({ item }) => 
                    <Task 
                        key={item.id}
                        id={item.id}
                        content={item.content}
                        isChecked={item.isChecked}
                        onChangeStatus={id => changeTaskStatus(id)}
                        onDeleteTask={id => handleDeleteTask(id)}
                    />
                }
                showsVerticalScrollIndicator={false}
                ListEmptyComponent={() => (
                    <Text>teste</Text>
                )}
            />
            

            {/* {taskList.map(task => {
                return (
                    <Task 
                        key={task.id}
                        id={task.id}
                        content={task.content}
                        isChecked={task.isChecked}
                        onChangeStatus={id => changeTaskStatus(id)}
                        onDeleteTask={id => handleDeleteTask(id)}
                    />
                )
            })} */}

        </>
    )
}