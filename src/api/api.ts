const base = {
  _baseUrl: 'https://egr.gov.by/api/v2/',
  _startDate: '01.01.2021',
  _endDate: '03.01.2021',
};

export const getAddressByPeriod = async (url: string) => {
  const response = await fetch(url);
  if (!response.ok) {
    return new Error(`Could not fetch ${url}, status: ${response.status}`);
  }
  return await response.json();
};
//Order for get address
export const getMailAddress = async (
  startDate = base._startDate,
  endDate = base._endDate,
  payload = 'egr/getAddressByPeriod'
) => {
  const res = await getAddressByPeriod(
    `${base._baseUrl}${payload}/${startDate}/${endDate}`
  );
  return res;
};

export const getMailAddressPR = async () => {
  const res = await getAddressByPeriod(
    'https://egr.gov.by/api/v2/egr/getAddressByPeriod/01.01.2021/03.01.2021'
  );
  return res;
};
