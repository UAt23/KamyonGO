import  React, { useState } from "react";
import { View, Text, Image, StyleSheet, useWindowDimensions, Pressable, KeyboardAvoidingView, Alert, Modal, TouchableWithoutFeedback, Keyboard} from 'react-native';
import { TextInput } from 'react-native-gesture-handler';

import modalLogo from '../../../../assets/loads/modal.png';

const DismissKeyboard = ({ children }) => (
    <TouchableWithoutFeedback onPress={() => Keyboard.dismiss()}>
        {children}
    </TouchableWithoutFeedback>
);

const Inspect = () => {
    const {height} = useWindowDimensions();
    const [code, setCode] = React.useState('');

    const onGiveOfferPressed = () => {
        
    }

    const [modalVisible, setModalVisible] = useState(false);
    return (
        <DismissKeyboard>

            <KeyboardAvoidingView 
                behavior='position'>
                <View style={[styles.root, {height: height * 0.95}]}>
                    <View style={styles.screenContent}>
                        <View style={{flex: 0.80, justifyContent: 'space-between'}}>
                            <View>
                                <Text style={styles.headerTwo}>Çıkış Adres:</Text>
                            </View>
                            <View>
                                <Text style={styles.headerTwo}>Varış Adres:</Text>
                            </View>
                            <View>
                                <Text style={styles.headerTwo}>Yük Tipi:</Text>
                            </View>
                            <View>
                                <Text style={styles.headerTwo}>Yük Ağırlığı:</Text>
                            </View>
                            <View>
                                <Text style={styles.headerTwo}>Araç Tipi</Text>
                            </View>
                            <View>
                                <Text style={styles.headerTwo}>Dorse Tipi</Text>
                            </View>
                            <View>
                                <Text style={styles.headerTwo}>Hacim:</Text>
                            </View>
                            <View>
                                <Text style={styles.headerTwo}>En düşük teklif:</Text>
                            </View>
                        </View>
                        <Modal
                            animationType="fade"
                            transparent={true}
                            visible={modalVisible}
                            onRequestClose={() => {
                                Alert.alert("Modal has been closed.");
                                setModalVisible(!modalVisible);
                            }}
                        >
                            <View style={styles.centeredView}>
                                <View style={styles.modalView}>
                                    <Image 
                                        source={modalLogo} 
                                        style={styles.logos} 
                                        resizeMode="contain" 
                                    />
                                    <Text style={styles.modalText}>Kaydınızı tamamlamanız gerekmektedir.</Text>
                                    <Pressable
                                        style={[styles.buttonModal, styles.button]}
                                        onPress={() => setModalVisible(!modalVisible)}
                                    >
                                        <Text style={styles.textStyle}>Üye Kaydı Tamamla</Text>
                                    </Pressable>
                                </View>
                            </View>
                        </Modal>
                        <View>
                            <View style={styles.offer}>
                                <TextInput  
                                    style={styles.phoneInput}
                                    keyboardType= 'number-pad'
                                />
                                <Text style={styles.headerThree}>**Bu ilana 2 teklif verilmiştir. En düşük teklif 2000TL.</Text>
                            </View>
                            <View style={styles.offer}>
                                <Pressable onPress={() => setModalVisible(true)} style={styles.button}>
                                    <Text style={styles.buttonInner}>Teklif Ver</Text>
                                </Pressable>
                            </View>
                        </View>
                    </View>
                </View>
            </KeyboardAvoidingView>
        </DismissKeyboard>
        
    );
}

const styles = StyleSheet.create({
    root: {
        justifyContent: 'space-between',
        alignItems: 'center',
        padding: 5,
        backgroundColor: "#eff0f7",
        
    },
    headerOne: {
        color: "#16234e",
        flex: 0.2,
        fontSize: 24,
        textAlign: 'center',
        padding: 4,
        fontWeight: "500",
    },
    headerTwo: {
        color: "#16234e",
        fontSize: 18,
        padding: 4,
        marginRight: 10,
        marginLeft: 10,
        fontWeight: "500",
    },
    headerThree: {
        color: "#16234e",
        fontSize: 12,
        padding: 4,
        marginRight: 10,
        marginLeft: 10,
        fontWeight: "500",
        textAlign: 'center',
    },
    phoneInput: {
        backgroundColor: "white",
        borderRadius: 12,
        height: 50,
        paddingLeft: 20
    },
    screenContent: {
        flex: 0.8,
        justifyContent: 'space-between',
        width: '100%',
        
    },
    logos: {
        height: 82,
        width:80,
    },
    button: {
        backgroundColor: '#36d42d',
        alignItems: 'center',
        width: "100%",
        padding: 10,
        borderRadius: 12,
        
    },
    buttonInner: {
        color: 'white',
        fontWeight: '600',
        fontSize: 24,
        

    },
    testimonial: {
        color: 'white',
        marginTop: 10,

    },
    offer: {
        paddingLeft: 40,
        paddingRight: 40,

    },
    //MODAL STYLE
    centeredView: {
        flex: 1,
        backgroundColor: 'rgba(44,55,95,0.9)',
        justifyContent: "center",
        alignItems: "center",
        marginTop: 12
    },
    modalView: {
        margin: 20,
        backgroundColor: "white",
        borderRadius: 20,
        paddingTop: 10,
        paddingBottom: 10,
        paddingRight: 20,
        paddingLeft: 20,
        alignItems: "center",
        shadowColor: "#000",
        shadowOffset: {
            width: 100,
            height: 102
        },
        shadowOpacity: 1,
        shadowRadius: 400,
        elevation: 5
    },
    buttonModal: {
        borderRadius: 12,
        paddingTop: 10,
        paddingBottom: 10,
        paddingRight: 40,
        paddingLeft: 40,
        elevation: 2
    },
    textStyle: {
        color: "white",
        fontWeight: "700",
        textAlign: "center"
    },
    modalText: {
        marginBottom: 15,
        paddingRight: 40,
        paddingLeft: 40,
        fontSize: 18,
        textAlign: "center"
    }
    
})

export default Inspect;