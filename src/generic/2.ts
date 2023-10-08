/*
  У вас є тип AllType. Існує функція compare, яка приймає два об'єкти. Ці об'єкти містять поля AllType. 
  Ваше завдання – використовувати Pick та generics для вказівки, що поля цих об'єктів належать AllType.
  Функція compare повинна повертати AllType.
*/

type AllType = {
  name: string;
  position: number;
  color: string;
  weight: number;
};

function compare<T extends Partial<AllType>, K extends keyof AllType>(
  top: T,
  bottom: Pick<AllType, K>
): AllType {
  return {
    name: top.name ?? bottom.name,
    color: top.color ?? bottom.color,
    position: top.position ?? bottom.position,
    weight: top.weight ?? bottom.weight,
  };
}

export {};
