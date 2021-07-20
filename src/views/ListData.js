import React, {useState} from 'react';
import {StyleSheet, View, Text, SafeAreaView, ScrollView  } from 'react-native';
import TextInfo from '../components/TextInfo/TextInfo';

export default ({route, navigation}) => {
    //console.warn(Object.keys(route.params));

    const [companyData, setCompanyData] = useState(route.params ? route.params : {});

    return (
        <SafeAreaView  style={styles.container}>
            <ScrollView >
                <TextInfo title={"Nome da empresa"} info={companyData.nome} />
                <TextInfo title={"Nome Fantasia"} info={companyData.fantasia} />
                <TextInfo title={"CNPJ"} info={companyData.cnpj} />
                <TextInfo title={"Porte"} info={companyData.porte} />
                <TextInfo title={"Situação"} info={companyData.situacao} />
                <TextInfo title={"Data situação"} info={companyData.data_situacao} />
                <TextInfo title={"Natureza jurídica"} info={companyData.natureza_juridica} />
                <TextInfo title={"Capital social"} info={companyData.capital_social} />
                <TextInfo title={"Atividade princial"} info={companyData.atividade_principal[0].text} />
                <TextInfo title={"Codigo atividade"} info={companyData.atividade_principal[0].code} />
                <TextInfo title={"E-mail"} info={companyData.email} />
                <TextInfo title={"Telefone"} info={companyData.telefone} />
                <TextInfo title={"Endereço"} info={companyData.logradouro+" N."+companyData.numero} />
                <TextInfo title={"CEP"} info={companyData.cep} />
                <TextInfo title={"Bairro"} info={companyData.bairro} />
                <TextInfo title={"Municipio"} info={companyData.municipio} />
                <TextInfo title={"UF"} info={companyData.uf} />

            </ScrollView>
        </SafeAreaView >
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        //justifyContent: "center",
        paddingTop: 10,
        backgroundColor: "#ecf0f1",
        padding: 8
    },
    containerData:{
        marginBottom: 5
    },
    title: {
        fontSize: 20,
        fontWeight: "bold",
        marginBottom: 2
    },
    data: {
        fontSize: 18,
    }
});
