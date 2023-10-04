import { Image, Text, TouchableOpacity, View } from 'react-native';
import { styles } from './styles';
import BouncyCheckbox from 'react-native-bouncy-checkbox';
import { useState } from 'react';
import Trash from '../../assets/images/trash.svg'

interface TaskProps {
    id: number,
    content: string,
    isChecked: boolean,
    onChangeStatus: (id: number) => void
    onDeleteTask: (id: number) => void
}

export default function Task(Task: TaskProps) {

    const [isChecked, setIsChecked] = useState(Task.isChecked)

    function handleIsChecked() {
        Task.onChangeStatus(Task.id)
        setIsChecked(!isChecked)
    }

    function handleDeleteTask() {
        Task.onDeleteTask(Task.id)
    }

    return (
        <>
            <View style={styles.container}>
                <View 
                    style={styles.checkerContainer}>
                    <BouncyCheckbox 
                        size={18}
                        fillColor="#5E60CE"
                        iconStyle={{ borderColor: "#4EA8DE" }}
                        innerIconStyle={{ borderWidth: 2 }}
                        unfillColor="#262626"
                        isChecked={isChecked}
                        onPress={handleIsChecked} 
                        />
                </View>
                <View style={styles.textContainer}>
                    <Text
                        style={styles.text}>
                        {Task.content}
                    </Text>    
                </View>
                <View style={styles.trashContainer}>
                    <TouchableOpacity
                        style={styles.deleteButton}
                        onPress={handleDeleteTask}
                        >
                        <Trash style={styles.trash}/>
                    </TouchableOpacity> 
                </View>
            </View>
        </>
    )
}