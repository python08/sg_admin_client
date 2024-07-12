// import { useTheme } from "@mui/material/styles";
// import { Box, Typography } from "@mui/material";
// import { FestivalsType } from "@common/temp/temp";
// import { style } from "../style";
// import { ImageButton } from "../style/style";

// type ProductCategoriesType = {
//   festivals: FestivalsType[];
//   handleFilter: (festivalId: number, festivalName: string) => void;
// };

// const ProductCategories = ({
//   festivals,
//   handleFilter,
// }: ProductCategoriesType) => {
//   const theme = useTheme();
//   const { palette } = theme;
//   const { mode } = palette;

//   const setMode = (globalTheme: string) => {
//     if (globalTheme === "dark") return "1px 1px 10px 1px rgb(255,255,255,0.5)";
//     return "1px 1px 10px 1px rgba(0, 0, 0, 0.5)";
//   };

//   const shadow = setMode(mode);

//   const getStyle = (active: boolean) =>
//     active ? style.activeFestival : style.inActiveFestival;

//   return (
//     <>
//       <Box sx={{ textAlign: "center" }} pt="1rem" pb="1rem">
//         <Typography component="p" variant="subtitle2">
//           View by festivals
//         </Typography>
//       </Box>
//       <Box sx={style.FestivalContainer}>
//         {festivals.map((festival: FestivalsType) => (
//           <Box key={festival.id} sx={style.FestivalBox}>
//             <Box sx={getStyle(festival.active)}>
//               <Box display="flex" justifyContent="center">
//                 <ImageButton
//                   onClick={() => handleFilter(festival.id, festival.name)}
//                   focusRipple
//                   shadow={shadow}
//                   active={festival.active}
//                 >
//                   <Box
//                     component="img"
//                     src={festival.link}
//                     sx={style.ImageStyle}
//                   />
//                 </ImageButton>
//               </Box>
//             </Box>
//           </Box>
//         ))}
//       </Box>
//     </>
//   );
// };

// export default ProductCategories;
