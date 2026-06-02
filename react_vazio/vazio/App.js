import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import { ScrollView, TextInput } from 'react-native-web';

export default function App() {
  return (
    <ScrollView>
      <view style={styles.titulo}>
        <text>Tela</text>
      </view>
      <ScrollView style={styles.cont_texto}>
        <text>A curiosidade é uma das características mais marcantes da natureza humana. Desde os primeiros anos de vida, as pessoas demonstram um desejo quase instintivo de explorar, descobrir e compreender o mundo ao seu redor. É por meio da curiosidade que aprendemos a falar, a caminhar, a resolver problemas e a desenvolver novas ideias. Sem ela, o progresso científico, tecnológico, cultural e social seria extremamente limitado.

Ao longo da história, grandes descobertas foram impulsionadas pela curiosidade. Navegadores cruzaram oceanos em busca de novas rotas comerciais, cientistas dedicaram suas vidas à investigação de fenômenos naturais e inventores criaram ferramentas que transformaram a sociedade. Em todos esses casos, a motivação inicial foi a mesma: a vontade de entender algo que ainda era desconhecido.

A curiosidade também desempenha um papel fundamental na educação. Quando um estudante se interessa genuinamente por um assunto, o aprendizado torna-se mais significativo e duradouro. Em vez de apenas memorizar informações, ele busca compreender conceitos, fazer conexões e aplicar o conhecimento em diferentes contextos. Por isso, muitos educadores defendem métodos de ensino que estimulem perguntas, experimentação e pensamento crítico.

Além do ambiente acadêmico, a curiosidade é importante para o crescimento pessoal. Pessoas curiosas tendem a estar mais abertas a novas experiências, culturas e perspectivas. Elas costumam desenvolver maior capacidade de adaptação, pois enxergam mudanças como oportunidades de aprendizado. Em um mundo que se transforma rapidamente, essa flexibilidade tornou-se uma habilidade valiosa.

No ambiente profissional, a curiosidade também pode ser um diferencial competitivo. Profissionais que procuram aprender continuamente conseguem acompanhar as mudanças de suas áreas de atuação e identificar novas oportunidades. Empresas inovadoras frequentemente valorizam colaboradores que fazem perguntas, questionam processos e propõem soluções criativas para desafios complexos.

Entretanto, a curiosidade nem sempre recebe a atenção que merece. Em alguns contextos, perguntas são desencorajadas e a busca por conhecimento pode ser vista como perda de tempo. Essa visão limita o potencial humano e reduz as possibilidades de inovação. Cultivar a curiosidade exige um ambiente que valorize a investigação, o diálogo e a liberdade de explorar diferentes caminhos.

A era digital ampliou significativamente o acesso à informação. Hoje, qualquer pessoa com acesso à internet pode aprender sobre praticamente qualquer assunto. No entanto, a abundância de informações também exige senso crítico. Ser curioso não significa aceitar tudo o que se encontra, mas desenvolver a capacidade de avaliar fontes, comparar evidências e construir conhecimento de forma responsável.

Outro aspecto importante é a relação entre curiosidade e criatividade. Muitas das ideias mais inovadoras surgem quando alguém faz perguntas incomuns ou observa um problema sob uma nova perspectiva. A curiosidade estimula a imaginação, incentiva a experimentação e favorece a combinação de conhecimentos de diferentes áreas. Dessa forma, ela atua como uma força motriz para a criação de soluções originais.

A curiosidade também contribui para a construção de relacionamentos mais saudáveis. Quando demonstramos interesse genuíno pelas experiências, opiniões e sentimentos de outras pessoas, fortalecemos a empatia e a compreensão mútua. Em sociedades cada vez mais diversas, essa capacidade de ouvir e aprender com o outro é essencial para a convivência harmoniosa.

Por fim, a curiosidade pode ser vista como um dos principais motores do desenvolvimento humano. Ela impulsiona a aprendizagem, favorece a inovação, amplia horizontes e enriquece a experiência de vida. Em vez de ser considerada apenas uma característica infantil, a curiosidade deve ser cultivada durante toda a vida. Quanto mais mantivermos vivo o desejo de aprender e compreender o mundo, maiores serão nossas possibilidades de crescimento pessoal e coletivo.

Em uma realidade marcada por mudanças constantes e desafios complexos, a curiosidade permanece como uma ferramenta indispensável. Ela nos ajuda a encontrar respostas, mas também a formular perguntas melhores. E, muitas vezes, são justamente as perguntas que abrem caminho para as maiores descobertas da humanidade.</text>
      </ScrollView>
      <view>
        <TextInput style=
      </view>
    </ScrollView>
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
