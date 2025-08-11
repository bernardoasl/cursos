núm = list()
pares = list()
ímpares = list()
while True:
    núm.append(int(input('Digite um número: ')))
    resp = str(input('Quer continuar? [S/N] '))
    if resp in 'Nn':
        break
for i, v in enumerate(núm):
    if v % 2 == 0:
        pares.append(v)
    elif v % 2 == 1:
        ímpares.append(v)
print('-=' * 30)
print(f'A lista completa é {núm}')
print(f'A lista de pares é {pares}')
print(f'A lista de ímpares é {ímpares}')
