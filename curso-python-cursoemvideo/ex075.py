núm = (int(input('Digite um valor: ')),
       int(input('Digite outro valor: ')),
       int(input('Digite mais um valor: ')),
       int(input('Digite ultimo valor: ')))
print(f'Você digitou os valores {núm}')
print(f'O valor 9 apareceu {núm.count(9)} vez(es)')
if 3 in núm:
       print(f'O valor 3 apareceu na {núm.index(3)+1}ª posição')
else:
       print('O valor 3 não foi digitado')
print('Os valores pares foram ', end='')
for n in núm:
       if n % 2 == 0:
              print(n, end=' ')
