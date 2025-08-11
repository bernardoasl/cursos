dados = dict()
dados['nome'] = str(input('Nome: '))
dados['média'] = float(input(f'Média de {dados["nome"]}: '))
if dados['média'] >= 7:
    dados['situação'] = 'Aprovado'
elif 5 <= aluno['média'] < 7:
    dados['situação'] = 'Recuperação'
else:
    aluno['situação'] = 'Reprovado'
print('-=' * 30)
for k, v in dados.items():
    print(f'  - {k} é igual a {v}')