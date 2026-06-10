
<!DOCTYPE html>
<html lang="pt-BR">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Guardião Rural - Prevenção de Incêndios</title>
    <link rel="stylesheet" href="style.css">
</head>
<body>

    <header>
        <div class="header-container">
            <h1>Guardião Rural</h1>
            <p>Concurso Agrinho 2026: Agro Forte, Futuro Sustentável</p>
        </div>
    </header>

    <main>
        
        <section id="sobre">
            <h2>Prevenção e Alerta de Incêndios no Campo</h2>
            <p>
                O agro paranaense enfrenta desafios constantes com a sazonalidade e períodos de seca. 
                Manter a segurança pessoal e ambiental exige monitoramento e ações preventivas eficazes. 
                Utilize nossa ferramenta abaixo para avaliar as condições da sua propriedade.
            </p>
        </section>

        <section id="utilitario">
            <h2>Simulador de Risco de Incêndio</h2>
            <p>Insira os dados climáticos atuais da sua região para calcular o nível de alerta estimado.</p>
            
            <form id="form-calculadora" novalidate>
                <div class="campo-grupo">
                    <label for="input-temperatura">Temperatura Atual (°C):</label>
                    <input type="number" id="input-temperatura" placeholder="Ex: 32" required>
                </div>

                <div class="campo-grupo">
                    <label for="input-umidade">Umidade Relativa do Ar (%):</label>
                    <input type="number" id="input-umidade" placeholder="Ex: 25" required>
                </div>

                <button type="button" id="btn-calcular">Calcular Nível de Alerta</button>
            </form>

            <article id="container-resposta" aria-live="polite">
                </article>
        </section>

        <section id="checklist">
            <h2>Checklist de Prevenção da Propriedade</h2>
            <p>Marque as medidas de segurança que já foram implementadas na sua fazenda:</p>
            
            <ul class="lista-checklist">
                <li>
                    <label>
                        <input type="checkbox" name="aceiros"> Manutenção de aceiros em dia (áreas limpas de vegetação seca).
                    </label>
                </li>
                <li>
                    <label>
                        <input type="checkbox" name="maquinas"> Revisão de maquinários agrícolas para evitar faíscas no escape.
                    </label>
                </li>
                <li>
                    <label>
                        <input type="checkbox" name="agua"> Reservatórios de água cheios e de fácil acesso para emergências.
                    </label>
                </li>
                <li>
                    <label>
                        <input type="checkbox" name="treinamento"> Equipe e colaboradores treinados em cursos do SENAR-PR.
                    </label>
                </li>
            </ul>
        </section>

        <section id="emergencia">
            <h2>O Que Fazer em Caso de Foco de Incêndio?</h2>
            <p>Se detectar fumaça ou chamas fora de controle, aja com rapidez e segurança:</p>
            <ul>
                <li>Afaste-se do perigo e nunca tente combater o fogo sozinho sem equipamentos de proteção.</li>
                <li>Monitore o vento para não ser cercado pelas chamas.</li>
                <li><strong>Ligue imediatamente para o Corpo de Bombeiros (193)</strong> ou acione a brigada rural local.</li>
            </ul>
        </section>

    </main>

    <footer>
        <p>&copy; 2026 Guardião Rural. Desenvolvido por Maria Eduarda Domingues Souza.</p>
        <p>Projeto focado em Segurança Pessoal e Ambiental - Programa Agrinho.</p>
    </footer>

    <script src="script.js"></script>
</body>
</html>
