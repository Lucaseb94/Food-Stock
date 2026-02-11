import { useNavigation } from "@react-navigation/native";
import { Button, Text, TextInput, View } from "react-native";
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { useState } from "react";

// Define o tipo de navegação entre telas para usar com o Native Stack dependendo da regra de negócio pode ser acrescentado mais tipos aceitos:
type TNavigationScreenProps = NativeStackNavigationProp<Record<string, any>>;

export const LoginPage = () => {
    // Hook para acessar a navegação entre telas
    const navigation = useNavigation<TNavigationScreenProps>();
    
    // Estados locais para armazenar o login e a senha digitados
    const [login, setLogin] = useState("");
    const [senha, setSenha] = useState("");

    return (
        // Container principal da tela com espaçamento interno é modelo conceitual a estilização pode ficar fora da tela principal
        <View style={{ padding: 20 }}> 
            <Text>Login:</Text>
            <TextInput 
                value={login}  // valor atual do campo
                onChangeText={setLogin} // atualiza o estado ao digitar
                placeholder="Digite seu login" // texto de ajuda
                style={{
                    borderWidth: 1,
                    borderColor: "#ccc",
                    padding: 8,
                    marginBottom: 12
                }} // Prop style={}Estilização interna conceitual ficar em pasta separada
            />

            <Text>Senha:</Text>
            <TextInput 
                value={senha} // valor atual do campo
                onChangeText={setSenha} // atualiza o estado ao digitar
                placeholder="Digite sua senha"
                secureTextEntry  // oculta os caracteres digitados
                style={{
                    borderWidth: 1,
                    borderColor: "#ccc",
                    padding: 8,
                    marginBottom: 12
                }} // Prop style={}Estilização interna conceitual ficar em pasta separada 
            />

            {/* Botão para acessar a próxima tela */}
            <Button 
                title="Acessar"
                // Ao clicar, navega para a tela "home" passando um parâmetro id para teste pois cada usuário no banco terá um id unico que identifica seu acesso
                onPress={() => navigation.navigate('home', { id: 5 })}
            />

            {/* Opções de cadastro alternativo */}
            <Text style={{ marginTop: 20 }}>Cadastre com: </Text>
            <Button 
                title='Gmail'
                // Aqui ainda não há navegação definida, apenas retorna o objeto navigation
                onPress={() => navigation}
            />
            <Button 
                title='FaceBook'
                // Mesmo caso acima, precisa ser ajustado para navegar ou executar ação
                onPress={() => navigation}
            />
        </View>
    );
};
