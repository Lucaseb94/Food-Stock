import { useRoute } from "@react-navigation/native"; 
// Hook do React Navigation que permite acessar informações da rota atual,
// incluindo parâmetros enviados de outra tela (ex: id, nome, etc).

import { SafeAreaView, Text } from "react-native"; 
// SafeAreaView: componente que garante que o conteúdo não fique por baixo de áreas do campo do celular como notificação porcentagem da bateria
// sensíveis da tela (como notch do iPhone ou barra de status).
// Text: componente básico para exibir textos na interface.
// Componente de tela "HomePage" onde havera os menus opções de acessos após login
export const HomePage = () => {
    // Hook useRoute: acessa os parâmetros enviados pela navegação.
    // Exemplo: se na tela de login foi chamado navigation.navigate('home', { id: 5 }),
    // aqui conseguimos recuperar esse { id: 5 } através de params.
    const { params } = useRoute<any>(); //tipo de consumo do valor é qualquer, deverá ser conforme regra de negocio

    return  (
        <>
            {/* Exibe o texto "Bem vindo" junto com o valor do parâmetro id recebido assim que clica em acessar leva para*/} 
            <Text>Bem vindo { params.id }</Text>
        </>
    );
}
