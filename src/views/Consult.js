import React, {useState} from 'react';
import {View, StyleSheet, Alert} from 'react-native';
import { Input, Button } from 'react-native-elements';
import axios from './../services/api';
export default props => {
    const [cnpj, setCnpj] = useState("");
    const [load, setLoad] = useState(false);

    function action(){
        /*props.navigation.navigate('ListData', {
            "atividade_principal": [
                {
                    "text": "Reparação e manutenção de computadores e de equipamentos periféricos",
                    "code": "95.11-8-00"
                }
            ],
            "data_situacao": "26/05/2021",
            "complemento": "QUADRA 131 ;LOTE 4",
            "tipo": "MATRIZ",
            "nome": "FELIPE MOREIRA DE CASTRO 02301280179",
            "uf": "GO",
            "telefone": "(62) 9125-2316",
            "email": "felipemoreiradecastro@gmail.com",
            "qsa": [],
            "situacao": "ATIVA",
            "bairro": "JARDIM CURITIBA",
            "logradouro": "R JC59",
            "numero": "sn",
            "cep": "74.481-450",
            "municipio": "GOIANIA",
            "porte": "MICRO EMPRESA",
            "abertura": "19/09/2017",
            "natureza_juridica": "213-5 - Empresário (Individual)",
            "fantasia": "FELIPE MOREIRA DE CASTRO",
            "cnpj": "28.675.763/0001-51",
            "ultima_atualizacao": "2021-07-05T01:57:26.279Z",
            "status": "OK",
            "efr": "",
            "motivo_situacao": "",
            "situacao_especial": "",
            "data_situacao_especial": "",
            "atividades_secundarias": [
                {
                    "code": "00.00-0-00",
                    "text": "Não informada"
                }
            ],
            "capital_social": "1.00",
            "extra": {},
            "billing": {
                "free": true,
                "database": true
            }
        });*/

        setLoad(true);
        axios.get(`${cnpj}`)
        .then(response => {
            if (response.data.status === "ERROR"){
                Alert.alert('Cadastro não encontrado', response.data.message);
            }else{
                props.navigation.navigate('ListData', response.data);
            }
        })
        .catch(err => {
            Alert.alert('Cadastro não encontrado', err.data.message);
        })
        .finally(() => {
            setLoad(false);
        });
    }

    return (
        <View style={styles.container}>
            <Input
                placeholder='CNPJ'
                keyboardType={'numeric'}
                onChangeText={setCnpj}
                value={cnpj}
            />
            <Button
                title="Buscar"
                buttonStyle={styles.button}
                containerStyle={styles.buttonContainer}
                titleStyle={styles.titleStyle}
                onPress={() => action()}
                loading={load}
            />
        </View>
    )
};
const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: "center",
        paddingTop: 10,
        backgroundColor: "#ecf0f1",
        padding: 8
    },
    button: {
        height: 60,
        backgroundColor: "#635E5D",
    },
    buttonContainer: {
        paddingHorizontal: 40
    },
    titleStyle: {
        fontSize: 20
    }
});
