import { makeStyles } from '@mui/styles';

const Styles = makeStyles(() => ({

  tableContainer: {
    width: 800,
    height: 900,
  },
  table: {},
  tableHead: {
    display: 'block',
  },
  tableBody: {
    display: 'block',
  },
  tableRowHead: {
    width: 800,
    height: 48,
    display: 'block',
    alignItems: 'center',
    justifyContent: 'space-between',
    flexDirection: 'row',
    backgroundColor: 'gray',
  },
  tableRowBody: {
    width: 800,
    height: 56,
    display: 'block',
    alignItems: 'center',
    justifyContent: 'space-between',
    flexDirection: 'row',
    backgroundColor: 'transparent',
  },
  tableCellHead: {
    witdh: 10,
    padding: '2px 0px 2px 0px',
  },
  tableCellBody: {
    width: 10,
    padding: '4px 0px 4px 0px',
  },
  tableCellHeadText: {
    fontSize: 17,
    fontWeight: 500,
    color: 'black',
  },
  tableCellBodyText: {
    fontSize: 14,
    fontWeight: 400,
    color: 'black',
  },
    rowsPerPageOptions: {
    order: 1, // Coloca o seletor de rowsPerPageOptions no início da linha
  },
  spacer: {
    flex: '1 1 auto',
  },
  paginationActions: {
    order: 2, // Coloca os botões de navegação no final da linha
  },
  currentPageButton: {
    color: 'grey', // theme.palette.grey[500], // Cor do botão da página corrente
    fontSize: 'inherit', // Define o tamanho da fonte para ser igual em todos os itens
  },
}));

export default Styles;
