import React from "react";
import { Box, Button, Table, TableBody, TableCell, TableContainer, TableHead, TableRow, TablePagination, Typography, Paper, PaginationItem, IconButton } from "@mui/material";
import  statementData  from '../../mocks/statementData';
import { KeyboardArrowLeft, KeyboardArrowRight } from '@mui/icons-material';
import Styles from './styles.js';

const StatementEntries = () => {
 	const classes = Styles();
	
	const [page, setPage] = React.useState(0);
  const [rowsPerPage, setRowsPerPage] = React.useState(10);

  const handleChangePage = (event, newPage) => {
    setPage(newPage);
  };

	const handleChangeRowsPerPage = (event) => {
		setPage(0);
		setRowsPerPage(parseInt(event.target.value, 10));
	}
	const totalPages = Math.ceil(statementData.length / rowsPerPage);

	const renderPageButtons = () => {
    const buttons = [];

    for (let i = 0; i < totalPages; i++) {
      buttons.push(
        <IconButton key={i} onClick={() => handleChangePage(null, i)} disabled={i === page}>
          {i + 1}
        </IconButton>
      );
    }
		return buttons
	};

	return (
		<Box>
			<TableContainer className={classes.tableContainer} component={Paper}>
				<Table>
					<TableHead className={classes.tableHead}>
						<TableRow className={classes.tableRowHead}>
							<TableCell className={classes.tableCellHead}><Typography className={classes.tableCellHeadText}>Descrição</Typography></TableCell>
							<TableCell className={classes.tableCellHead}><Typography className={classes.tableCellHeadText}>Índice</Typography></TableCell>
							<TableCell className={classes.tableCellHead}><Typography className={classes.tableCellHeadText}>Data de vencimento</Typography></TableCell>
							<TableCell className={classes.tableCellHead}><Typography className={classes.tableCellHeadText}>Data de pagamento</Typography></TableCell>
							<TableCell className={classes.tableCellHead}><Typography className={classes.tableCellHeadText}>Valor total</Typography></TableCell>
							<TableCell className={classes.tableCellHead}><Typography className={classes.tableCellHeadText}>Valor pago</Typography></TableCell>
						</TableRow>
					</TableHead>
					<TableBody className={classes.tableBody}>
						{(statementData || []).slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage).map((row) => (
						<TableRow key={row.id} className={classes.tableRowBody}>
							<TableCell className={classes.tableCellBody}><Typography className={classes.tableCellBodyText}>{row.id}</Typography></TableCell>
							<TableCell className={classes.tableCellBody}><Typography className={classes.tableCellBodyText}>{row.descricao}</Typography></TableCell>
							<TableCell className={classes.tableCellBody}><Typography className={classes.tableCellBodyText}>{row.dataVencimento}</Typography></TableCell>
							<TableCell className={classes.tableCellBody}><Typography className={classes.tableCellBodyText}>{row.dataPagamento}</Typography></TableCell>
							<TableCell className={classes.tableCellBody}><Typography className={classes.tableCellBodyText}>{row.valorTotal}</Typography></TableCell>
							<TableCell className={classes.tableCellBody}><Typography className={classes.tableCellBodyText}>{row.valorPago}</Typography></TableCell>
						</TableRow>
						))}
					</TableBody>
					</Table>
				</TableContainer>
			<Box style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
				<TablePagination
					style={{ display: 'inline-flex', alignItems: 'start' }}
					rowsPerPageOptions={[
						{value: 10, label: '10 linhas por página'},
						{value: 15, label: '15 linhas por página'},
						{value: 20, label: '20 linhas por página'},
						{value: 30, label: '30 linhas por página'}
					]}
					labelRowsPerPage={''}
					onRowsPerPageChange={handleChangeRowsPerPage}
					component="div"
					count={statementData.length}
					rowsPerPage={rowsPerPage}
					page={page}
					onPageChange={()=>{}}
					labelDisplayedRows={() => {}}
					nextArrowIconButtonProps={{ style: { display: 'none' } }}
  				backArrowIconButtonProps={{ style: { display: 'none' } }}
				/>
				<TablePagination
					style={{ display: 'inline-flex', alignItems: 'end', flexDirection: 'row' }}
					rowsPerPageOptions={[]}
					labelRowsPerPage={''}
					component="div"
					count={statementData.length}
					rowsPerPage={rowsPerPage}
					page={page}
					onPageChange={handleChangePage}
					labelDisplayedRows={({ from, to, count }) => `${from}-${to} de ${count}`}
					nextIconButtonText="Próxima página"
					backIconButtonText="Página anterior"
					nextButton={
						<PaginationItem
							component="button"
							icon=">"
							onClick={() => handleChangePage(null, page + 1)}
							disabled={page >= totalPages - 1}
						/>
					}
					backButton={
						<PaginationItem
							component="button"
							icon="<"
							onClick={() => handleChangePage(null, page - 1)}
							disabled={page === 0}
						/>
					}
					
					className={{
						rowsPerPageOptions: classes.rowsPerPageOptions,
						spacer: classes.spacer,
						paginationActions: classes.paginationActions,
					}}

					ActionsComponent={() => (
						<div>
							<IconButton onClick={() => handleChangePage(null, page - 1)} disabled={page === 0}>
								<KeyboardArrowLeft />
							</IconButton>
							{renderPageButtons()}
							<IconButton onClick={() => handleChangePage(null, page + 1)} disabled={page === totalPages - 1}>
								<KeyboardArrowRight />
							</IconButton>
						</div>
					)}
				/>
			</Box>
			<Button>Teste</Button>
		</Box>
	)
};

export default StatementEntries;
