export const sections = [
  {
    key: 'basic',
    name: '基本',
  },
  {
    key: 'advance',
    name: '応用',
  },
]

export const samplePages = [
  {
    key: 'rotate',
    name: '回転する',
    section: sections[0],
  },
  {
    key: 'rotate_by',
    name: '相対角度を指定して回転する',
    section: sections[0],
  },
  {
    key: 'rotate_to',
    name: '絶対角度を指定して回転する',
    section: sections[0],
  },
  {
    key: 'stop',
    name: '停止する（スムーズな停止、急停止、ロックする）',
    section: sections[0],
  },
  {
    key: 'get_rotation',
    name: '相対角度を指定して回転する',
    section: sections[0],
  },
  {
    key: 'reset_rotation',
    name: '相対角度を指定して回転する',
    section: sections[0],
  },
  {
    key: 'UDP',
    name: '相対角度を指定して回転する',
    section: sections[1],
  },
  {
    key: 'sync',
    name: '別々の引数で同時に実行',
    section: sections[1],
  },
]

export const getSamplePage = (key: string) => {
  return samplePages
    .map((data, index) => {
      return {
        ...data,
        displayName: `${index + 1}: ${data.name}`,
      }
    })
    .find((a) => a.key === key)
}
