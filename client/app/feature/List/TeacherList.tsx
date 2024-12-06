import { CustomTable } from '@/components/molecule';
import { teachersData } from './mock';

const TitleColumn = ['teacherId', 'subjects', 'classes', 'phone', 'address'];

const TeacherList = () => {
  return (
    <div className="">
      <CustomTable data={teachersData} titleColumn={TitleColumn} />
    </div>
  );
};

export default TeacherList;
