const ITEMS_LENGTH = 4

const generateHash = () => (Date.now().toString(36) + Math.random().toString(36).substr(2, 5))

export const generateItems = () => {
  const items = []
  for (let i = 0; i < ITEMS_LENGTH; i++)
    items.push({
      id: generateHash(),
      value: i
    })
  return items
}

export const shuffle = (array, isPush) => {
  const result = [...array]

  const count = Math.floor(Math.random() * 4) + 1

  for (let i = 0; i < count; i++) {
    if (isPush)
      result.push({
        id: generateHash(),
        value: i
      })
    else
      result.pop()
  }

  let currentIndex = result.length
  let temporaryValue
  let randomIndex

  while (0 !== currentIndex) {
    randomIndex = Math.floor(Math.random() * currentIndex);
    currentIndex -= 1;

    temporaryValue = result[currentIndex];
    result[currentIndex] = result[randomIndex];
    result[randomIndex] = temporaryValue;
  }

  return result
}