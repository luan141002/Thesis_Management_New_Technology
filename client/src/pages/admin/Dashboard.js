import React from 'react';
import {
    Avatar,
    Button,
    Card,
    CardContent,
    CardHeader,
    CardMedia,
    Divider,
    IconButton,
    Menu,
    MenuItem,
    Typography,
    styled,
} from '@mui/material';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Unstable_Grid2';
import PaidIcon from '@mui/icons-material/Paid';
import ArchiveIcon from '@mui/icons-material/Archive';
import PictureAsPdfIcon from '@mui/icons-material/PictureAsPdf';
import PeopleAltIcon from '@mui/icons-material/PeopleAlt';
import SyncIcon from '@mui/icons-material/Sync';
import ShoppingBasketIcon from '@mui/icons-material/ShoppingBasket';

import {
    BarChart,
    Bar,
    XAxis,
    YAxis,
    Tooltip,
    Legend,
    PieChart,
    Pie,
    Cell,
} from 'recharts';


const dataPie = [
    { name: 'Group A', value: 400 },
    { name: 'Group B', value: 300 },
    { name: 'Group C', value: 300 },
    { name: 'Group D', value: 200 },
];
const COLORS = ['#0088FE', '#00C49F', '#FFBB28', '#FF8042'];

const StyledTypography = styled(Typography)({
    fontSize: '12px',
    fontWeight: 600,
    color: '#6C737F',
    letterSpacing: '0.05rem',
    lineHeight: '3rem',
    mb: '0.35rem',
    textTransform: 'uppercase',
});

const StyledMenuItem = styled(MenuItem)({
    fontSize: '14px',
});

const data = [
    {
        name: 'Tháng 1',
        current: 4000,
        lastYear: 4000,
    },
    {
        name: 'Tháng 2',
        current: 3000,
        lastYear: 3000,
    },
    {
        name: 'Tháng 3',
        current: 2000,
        lastYear: 2000,
    },
    {
        name: 'Tháng 4',
        current: 2780,
        lastYear: 2780,
    },
    {
        name: 'Tháng 5',
        current: 1890,
        lastYear: 1890,
    },
    {
        name: 'Tháng 6',
        current: 2390,
        lastYear: 2390,
    },
    {
        name: 'Tháng 7',
        current: 3490,
        lastYear: 3490,
    },
    {
        name: 'Tháng 8',
        current: 2490,
        lastYear: 2490,
    },
    {
        name: 'Tháng 9',
        current: 3440,
        lastYear: 3440,
    },
    {
        name: 'Tháng 10',
        current: 3030,
        lastYear: 3030,
    },
    {
        name: 'Tháng 11',
        current: 1290,
        lastYear: 1290,
    },
    {
        name: 'Tháng 12',
        current: 6490,
        lastYear: 6490,
    },
];

const getIntroOfPage = (label) => {
    if (label === 'Page A') {
        return "Page A is about men's clothing";
    }
    if (label === 'Page B') {
        return "Page B is about women's dress";
    }
    if (label === 'Page C') {
        return "Page C is about women's bag";
    }
    if (label === 'Page D') {
        return 'Page D is about household goods';
    }
    if (label === 'Page E') {
        return 'Page E is about food';
    }
    if (label === 'Page F') {
        return 'Page F is about baby food';
    }
    return '';
};

const CustomTooltip = ({ active, payload, label }) => {
    if (active && payload && payload.length) {
        return (
            <div className="custom-tooltip">
                <p className="label">{`${label} : ${payload[0].value}`}</p>
                <p className="intro">{getIntroOfPage(label)}</p>
                <p className="desc">Anything you want can be displayed here.</p>
            </div>
        );
    }

    return null;
};

function Dashboard() {
    const [anchorEl, setAnchorEl] = React.useState(null);
    const [cardContentWidth, setCardContentWidth] = React.useState(0);

    const handleResize = () => {
        const cardContent = document.getElementById('card-content-sales');
        if (cardContent) {
            setCardContentWidth(cardContent.offsetWidth);
        }
    };

    React.useEffect(() => {
        handleResize(); // Lấy giá trị ban đầu của chiều rộng
        window.addEventListener('resize', handleResize); // Thêm sự kiện resize
        return () => {
            window.removeEventListener('resize', handleResize); // Xóa sự kiện resize khi component bị hủy
        };
    }, []);

    const open = Boolean(anchorEl);

    const handleClick = (event) => {
        setAnchorEl(event.currentTarget);
    };
    const handleClose = () => {
        setAnchorEl(null);
    };
    return (
        <Box sx={{ flexGrow: 1 }}>
            <Grid container spacing={3}>
                {/* Total earning */}
                <Grid xs={6} md={3}>
                    <Paper elevation={0} sx={{ position: 'relative', boxShadow: 'none' }}>
                        <Card variant="outlined" sx={{ borderRadius: '20px', minHeight: '14rem' }}>
                            <CardContent
                                sx={{ justifyContent: 'space-between', alignItems: 'center' }}
                            >
                                <Menu
                                    anchorEl={anchorEl}
                                    open={open}
                                    onClose={handleClose}
                                    sx={{
                                        boxShadow: 'none',
                                    }}
                                >
                                    <StyledMenuItem onClick={handleClose}>
                                        <ArchiveIcon sx={{ mr: 1 }} />
                                        Archive
                                    </StyledMenuItem>
                                    <StyledMenuItem onClick={handleClose}>
                                        <PictureAsPdfIcon sx={{ mr: 1 }} />
                                        Export
                                    </StyledMenuItem>
                                </Menu>
                                <Grid
                                    container
                                    sx={{
                                        mt: 2,
                                        justifyContent: 'space-between',
                                        alignItems: 'center',
                                    }}
                                >
                                    <Grid>
                                        <StyledTypography>Total Earning</StyledTypography>
                                        <Typography
                                            variant="h1"
                                            component="h4"
                                            sx={{ fontSize: 32, fontWeight: 600 }}
                                            gutterBottom
                                        >
                                            $50000
                                        </Typography>
                                    </Grid>
                                    <Grid>
                                        <Avatar sx={{ bgcolor: '#f04438', width: 56, height: 56 }}>
                                            <PaidIcon sx={{ width: 24, height: 24 }}></PaidIcon>
                                        </Avatar>
                                    </Grid>
                                </Grid>
                            </CardContent>
                        </Card>
                    </Paper>
                </Grid>

                {/* Total customer */}
                <Grid xs={6} md={3}>
                    <Paper elevation={0} sx={{ position: 'relative', boxShadow: 'none' }}>
                        <Card variant="outlined" sx={{ borderRadius: '20px', minHeight: '14rem' }}>
                            <CardContent
                                sx={{ justifyContent: 'space-between', alignItems: 'center' }}
                            >
                                <Menu anchorEl={anchorEl} open={open} onClose={handleClose}>
                                    <StyledMenuItem onClick={handleClose}>
                                        <ArchiveIcon sx={{ mr: 1 }} />
                                        Archive
                                    </StyledMenuItem>
                                    <StyledMenuItem onClick={handleClose}>
                                        <PictureAsPdfIcon sx={{ mr: 1 }} />
                                        Export
                                    </StyledMenuItem>
                                </Menu>
                                <Grid
                                    container
                                    sx={{
                                        mt: 2,
                                        justifyContent: 'space-between',
                                        alignItems: 'center',
                                    }}
                                >
                                    <Grid>
                                        <StyledTypography>Total Customers</StyledTypography>
                                        <Typography
                                            variant="h1"
                                            component="h4"
                                            sx={{ fontSize: 32, fontWeight: 600 }}
                                            gutterBottom
                                        >
                                            5000
                                        </Typography>
                                    </Grid>
                                    <Grid>
                                        <Avatar sx={{ bgcolor: '#10B981', width: 56, height: 56 }}>
                                            <PeopleAltIcon
                                                sx={{ width: 24, height: 24 }}
                                            ></PeopleAltIcon>
                                        </Avatar>
                                    </Grid>
                                </Grid>
                            </CardContent>
                        </Card>
                    </Paper>
                </Grid>

                {/* Total order */}
                <Grid xs={6} md={3}>
                    <Paper elevation={0} sx={{ position: 'relative', boxShadow: 'none' }}>
                        <Card variant="outlined" sx={{ borderRadius: '20px', minHeight: '14rem' }}>
                            <CardContent
                                sx={{ justifyContent: 'space-between', alignItems: 'center' }}
                            >
                                <Menu anchorEl={anchorEl} open={open} onClose={handleClose}>
                                    <StyledMenuItem onClick={handleClose}>
                                        <ArchiveIcon sx={{ mr: 1 }} />
                                        Archive
                                    </StyledMenuItem>
                                    <StyledMenuItem onClick={handleClose}>
                                        <PictureAsPdfIcon sx={{ mr: 1 }} />
                                        Export
                                    </StyledMenuItem>
                                </Menu>
                                <Grid
                                    container
                                    sx={{
                                        mt: 2,
                                        justifyContent: 'space-between',
                                        alignItems: 'center',
                                    }}
                                >
                                    <Grid>
                                        <StyledTypography>Total Orders</StyledTypography>
                                        <Typography
                                            variant="h1"
                                            component="h4"
                                            sx={{ fontSize: 32, fontWeight: 600 }}
                                            gutterBottom
                                        >
                                            500
                                        </Typography>
                                    </Grid>
                                    <Grid>
                                        <Avatar sx={{ bgcolor: '#f79009', width: 56, height: 56 }}>
                                            <ShoppingBasketIcon
                                                sx={{ width: 24, height: 24 }}
                                            ></ShoppingBasketIcon>
                                        </Avatar>
                                    </Grid>
                                </Grid>
                            </CardContent>
                        </Card>
                    </Paper>
                </Grid>

                {/* Total profit */}
                <Grid xs={6} md={3}>
                    <Paper elevation={0} sx={{ position: 'relative', boxShadow: 'none' }}>
                        <Card variant="outlined" sx={{ borderRadius: '20px', minHeight: '14rem' }}>
                            <CardContent
                                sx={{ justifyContent: 'space-between', alignItems: 'center' }}
                            >
                                <Menu
                                    anchorEl={anchorEl}
                                    open={open}
                                    onClose={handleClose}
                                    sx={{
                                        boxShadow: 'none',
                                    }}
                                >
                                    <StyledMenuItem onClick={handleClose}>
                                        <ArchiveIcon sx={{ mr: 1 }} />
                                        Archive
                                    </StyledMenuItem>
                                    <StyledMenuItem onClick={handleClose}>
                                        <PictureAsPdfIcon sx={{ mr: 1 }} />
                                        Export
                                    </StyledMenuItem>
                                </Menu>
                                <Grid
                                    container
                                    sx={{
                                        mt: 2,
                                        justifyContent: 'space-between',
                                        alignItems: 'center',
                                    }}
                                >
                                    <Grid>
                                        <StyledTypography>Total Profit</StyledTypography>
                                        <Typography
                                            variant="h1"
                                            component="h4"
                                            sx={{ fontSize: 32, fontWeight: 600 }}
                                            gutterBottom
                                        >
                                            $42000
                                        </Typography>
                                    </Grid>
                                    <Grid>
                                        <Avatar sx={{ bgcolor: '#6366f1', width: 56, height: 56 }}>
                                            <PaidIcon sx={{ width: 24, height: 24 }}></PaidIcon>
                                        </Avatar>
                                    </Grid>
                                </Grid>
                            </CardContent>
                        </Card>
                    </Paper>
                </Grid>

                {/* Sales Chart  */}
                <Grid xs={12} md={12} lg={8}>
                    <Paper
                        elevation={0}
                        sx={{ position: 'relative', boxShadow: 'none', fontSize: '14px' }}
                    >
                        <Card variant="outlined" sx={{ borderRadius: '20px', minHeight: '14rem' }}>
                            <CardHeader
                                title={
                                    <Typography
                                        sx={{
                                            fontSize: '2rem',
                                            fontWeight: 600,
                                            paddingLeft: 4,
                                        }}
                                    >
                                        Sales
                                    </Typography>
                                }
                                action={
                                    <IconButton>
                                        <SyncIcon sx={{ width: 24, height: 24 }} />
                                    </IconButton>
                                }
                            />

                            <CardContent
                                id="card-content-sales"
                                sx={{
                                    display: 'flex',
                                    justifyContent: 'center',
                                }}
                            >
                                <BarChart
                                    width={cardContentWidth - 50}
                                    height={350}
                                    data={data}
                                    margin={{
                                        top: 5,
                                        right: 30,
                                        left: 20,
                                        bottom: 5,
                                    }}
                                    barCategoryGap="15%"
                                >
                                    <XAxis
                                        dataKey="name"
                                        padding={{ left: 10, right: 10 }}
                                        axisLine={false}
                                        tickLine={false}
                                    />
                                    <YAxis
                                        padding={{ bottom: 10 }}
                                        axisLine={false}
                                        tickLine={false}
                                    />
                                    <Tooltip content={<CustomTooltip />} />

                                    <Bar dataKey="current" fill="#6366f1" />
                                    <Bar dataKey="lastYear" fill="#badaf9" />
                                </BarChart>
                            </CardContent>
                        </Card>
                    </Paper>
                </Grid>
                {/* Pie Chart */}
                <Grid xs={12} md={6} lg={4}>
                    <Paper elevation={0} sx={{ position: 'relative' }}>
                        <Card variant="outlined" sx={{ borderRadius: '20px', minHeight: '14rem' }}>
                            <CardHeader
                                title={
                                    <Typography
                                        sx={{
                                            fontSize: '2rem',
                                            fontWeight: 600,
                                            paddingLeft: 4,
                                        }}
                                    >
                                        Traffic Source
                                    </Typography>
                                }
                            />
                            <CardContent
                                sx={{
                                    display: 'flex',
                                    flexDirection: 'column',
                                    alignItems: 'center', // Canh giữa theo chiều ngang
                                    justifyContent: 'center', // Canh giữa theo chiều dọc
                                    minHeight: 0, // Đảm bảo CardContent có kích thước tối thiểu
                                }}
                            >
                                <PieChart width={280} height={350}>
                                    <Pie
                                        data={dataPie}
                                        cx={140} // Điều chỉnh vị trí theo chiều ngang
                                        cy={175} // Điều chỉnh vị trí theo chiều dọc
                                        innerRadius={60}
                                        outerRadius={80}
                                        fill="#8884d8"
                                        paddingAngle={5}
                                        dataKey="value"
                                    >
                                        {dataPie.map((entry, index) => (
                                            <Cell
                                                key={`cell-${index}`}
                                                fill={COLORS[index % COLORS.length]}
                                            />
                                        ))}
                                    </Pie>
                                    <Legend />
                                </PieChart>
                            </CardContent>
                        </Card>
                    </Paper>
                </Grid>

            </Grid>
        </Box>
    );
}

export default Dashboard;
