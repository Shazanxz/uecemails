(function (root) {
  var D = {
    /* [título, nome, e-mail, observação] — para adicionar um professor, basta incluir uma linha. */
    professores: [
      ['Profa.', 'Andrea Cavalcante', 'andrea.cavalcante@uece.br'],
      ['Prof.', 'Antonio Gomes', 'antonio.gomes@uece.br'],
      ['Profa.', 'Camila Dutra', 'camila.dutra@uece.br'],
      ['Prof.', 'Claudio Smalley', 'claudio.smalley@uece.br'],
      ['Profa.', 'Cleire Falcão', 'cleire.falcao@uece.br'],
      ['Prof.', 'David Davim', 'david.davim@uece.br'],
      ['Prof.', 'Davis Paula', 'davis.paula@uece.br'],
      ['Profa.', 'Denise Bomtempo', 'denise.bomtempo@uece.br'],
      ['Profa.', 'Erika Brito', 'erika.brito@uece.br'],
      ['Prof.', 'Fabio Perdigão', 'fabioperdigao@gmail.com'],
      ['Prof.', 'Fernando Rivas', 'fernando.rivas@uece.br'],
      ['Prof.', 'João Silvio', 'silvio.morais@uece.br'],
      ['Profa.', 'Leonor', 'leonordemaria.melo@uece.br'],
      ['Profa.', 'Maria Lucia', 'lucia.cruz@uece.br', 'Não atende no turno da tarde'],
      ['Profa.', 'Monica Petralanda', 'monica.petralanda@uece.br'],
      ['Prof.', 'Otavio Lemos', 'otavio.costa@uece.br'],
      ['Profa.', 'Palmira Mesquita', 'palmira.mesquita@uece.br'],
      ['Prof.', 'Paulo Pessoa', 'paulo.pessoa@uece.br'],
      ['Prof.', 'Rodrigues Rabelo', 'rodrigues.rabelo@uece.br'],
      ['Prof.', 'Stanley', 'stanley.braz@uece.br'],
      ['Profa.', 'Tereza Vasconcelos', 'tereza.vasconcelos@uece.br'],
      ['Profa.', 'Vera Silva', 'vera.silva@uece.br'],
      ['Profa.', 'Vitoria Sabbado', 'vitoria.sabbbado@uece.br'],
      ['Prof.', 'Wagner Amorin', 'wagner.amorin@uece.br'],
      ['Prof.', 'Wallason Farias', 'wallason.farias@uece.br']
    ],
    /* [nome, descrição, e-mail, grupo] — endereços conferidos em páginas oficiais uece.br */
    setores: [
      ['Coordenação de Geografia', 'Atendimento ao aluno', 'coordenacaogeografia@uece.br', 'Graduação'],
      ['DEG', 'Departamento de Ensino e Graduação', 'deg@uece.br', 'Instituição'],
      ['DETIC', 'Tecnologia da Informação', 'detic@uece.br', 'Instituição'],
      ['PRAE', 'Políticas estudantis', 'sec.prae@uece.br', 'Instituição'],
      ['PROPLAN', 'Planejamento e Desenvolvimento Institucional', 'proplan@uece.br', 'Instituição'],
      ['CPA', 'Comissão Própria de Avaliação', 'cpa@uece.br', 'Instituição'],
      ['EdUECE', 'Editora da universidade', 'eduece@uece.br', 'Instituição'],
      ['PIRP', 'Residência Pedagógica (coordenação institucional)', 'pirp@uece.br', 'Graduação'],
      ['PPGA', 'Pós-graduação em Administração', 'ppga@uece.br', 'Pós-graduação'],
      ['PPGE', 'Pós-graduação em Educação', 'ppge@uece.br', 'Pós-graduação'],
      ['PPGCV', 'Pós-graduação em Ciências Veterinárias', 'pgvet@uece.br', 'Pós-graduação'],
      ['PPGFil', 'Mestrado em Filosofia', 'cmaf@uece.br', 'Pós-graduação']
    ]
  };
  if (typeof module !== 'undefined' && module.exports) module.exports = D; else root.UECE = D;
})(this);
