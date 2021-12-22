import { addItem } from './';

const mock = [
  {
    id: '1',
    title: 'title1',
    children: [
      {
        id: '1.1',
        title: 'title1.1',
        children: [
          {
            id: '1.1.1',
            title: 'title1.1.1',
            children: [],
          },
        ],
      },
    ],
  },
  {
    id: '2',
    title: 'title2',
    children: [
      {
        id: '2.1',
        title: 'title2.1',
        children: [
          {
            id: '2.1.1',
            title: 'title2.1.1',
            children: [
              {
                id: '2.1.1.1',
                title: 'title2.1.1.1',
                children: [],
              },
            ],
          },
        ],
      },
      {
        id: '2.2',
        title: 'title2.2',
        children: [],
      },
    ],
  },
];

const newItem = { id: 'newTestId', title: 'title2', children: [] };

describe('addItem', () => {
  it('should update the array to include new value one level deep', () => {
    const results = addItem(mock, '1', newItem);

    expect(results[0].children[1]).toEqual(newItem);
  });

  it('should update the array to include new value two levels deep', () => {
    const results = addItem(mock, '1.1', newItem);

    expect(results[0].children[0].children[1]).toEqual(newItem);
  });

  it('should update the array to include new value three levels deep', () => {
    const results = addItem(mock, '2.1.1', newItem);

    expect(results[1].children[0].children[0].children[1]).toEqual(newItem);
  });

  it('should update the array to include new value when array is empty', () => {
    const results = addItem([], undefined, newItem);

    expect(results[0]).toEqual(newItem);
  });

  it('should update the array to include new value when there is no parent id', () => {
    const results = addItem(mock, undefined, newItem);

    expect(results[2]).toEqual(newItem);
  });
});
