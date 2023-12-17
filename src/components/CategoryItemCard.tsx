import { Flex, WrapItem } from "@chakra-ui/react";

interface CategoryProps {
    label: string;
    minW?: string;
    minH?: string;
    bg?: string;
    color?: string;
}

export const CategoryItemCard: React.FC<CategoryProps> = ({ label, minW = '91px', minH = '31px', bg = '#1D1D1D', color = '#898989' }) => {
    return (
      <WrapItem>
        <Flex
          align={'center'}
          justify={'center'}
          textAlign={'center'}
          minW={minW}
          minH={minH}
          borderRadius={'31.056px'}
          bg={bg}
          color={color}
          fontStyle={'normal'}
          fontSize={'11.646px'}
          fontWeight={400}
          sx={{ 'text-edge': 'cap', 'leading-trim': 'both' }}
        >
          {label}
        </Flex>
      </WrapItem>
    );
};