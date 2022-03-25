import { Skeleton as AntSkeleton, Card } from 'antd';

const Skeleton = ({ rows = 4, loading }) => {
  return (
    <div style={{display: loading ? "block" : "none"}}>
      <Card>
        <AntSkeleton loading={loading} avatar paragraph={{rows}}/>
      </Card>
      <Card style={{marginTop: "2rem"}}>
        <AntSkeleton loading={loading} avatar paragraph={{rows}}/>
      </Card>
    </div>
  )
}
export default Skeleton;