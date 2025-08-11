tabela = ('Palmeiras', 'Grêmio', 'Atlético-MG', 'Flamengo',
          'Botafogo', 'Bragantino', 'Fluminese', 'Athletico-PR',
          'Internacional', 'Fortaleza', 'São Paulo', 'Cuiabá',
          'Corinthians', 'Cruzeiro', 'Vasco', 'Bahia', 'Santos',
          'Goiás', 'Coritiba', 'América-MG')
print('=-=' * 9)
print('TABELA BRASILEIRÃO 2023')
print('=-=' * 15)
for t in tabela:
    print(t)
print('=-=' * 15)
print(f'Os 5 Primeiros colocados são {tabela[:5]}')
print('=-=' * 15)
print(f'Os últimos 4 colocados são {tabela[-4:]}')
print('=-=' * 15)
print(f'Times em oredm alfabética: {sorted(tabela)}')
print('=-=' * 15)
print(f'O ATLÉTICO-MG está na {tabela.index("Atlético-MG")+1}ª posição')