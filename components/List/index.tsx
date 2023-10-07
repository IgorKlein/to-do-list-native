import { FlatList, Text, View } from 'react-native';
import { styles } from './styles';
import Task from '../Task';
import Clipboard from '../../assets/images/clipboard.svg'

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
                        }]}>Concluidas</Text>

                    <View style={styles.panelCounter}>
                        <Text style={styles.panelCounterText}>
                                {tasksCheckedCounter}
                        </Text>
                    </View>

                </View>
            </View>

            <FlatList 
                style={{width: '100%'}}
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
                    <View style={styles.emptyScreen}>
                        <Clipboard style={styles.clipboard}/>
                        <Text style={styles.emptyScreenTitle}>Você não tem tarefas cadastradas</Text>
                        <Text style={styles.emptyScreenSubtitle}>Crie tarefas e organize seus itens a fazer</Text>
                    </View>
                    
                )}
            />
        </>
    )
}