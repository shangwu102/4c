<template>
  <div>
    <el-container>
      <el-main>
        <el-table :data="vaccines" style="width: 100%;" border max-height="580">
          <el-table-column prop="name" label="疫苗名称"></el-table-column>
          <el-table-column prop="stock" label="库存量"></el-table-column>
          <el-table-column label="操作">
            <template slot-scope="scope">
              <div v-if="editingIndex === scope.$index" class="edit-container">
                <el-input v-model="inputValue" size="small" ref="inputRef" @blur="saveChanges(scope.$index, scope.row)"
                  @keyup.enter.native="saveChanges(scope.$index, scope.row)">
                </el-input>
                <el-button @click="saveChanges(scope.$index, scope.row)" type="success" size="small"
                  plain>提交</el-button>
              </div>
              <div v-else>
                <el-button @click="increaseStock(scope.row)" type="primary" size="small" plain>增加库存</el-button>
                <el-button @click="decreaseStock(scope.row)" type="danger" size="small" plain>减少库存</el-button>
                <el-button @click="editStock(scope.$index, scope.row)" type="warning" plain
                  size="small">编辑库存</el-button>
              </div>
            </template>
          </el-table-column>
        </el-table>
      </el-main>
    </el-container>
  </div>
</template>

<script>
import { mapState, mapActions } from 'vuex';

export default {
  data () {
    return {
      editingIndex: -1,
      inputValue: 0,
    };
  },
  computed: {
    ...mapState('vaccinum', ['vaccines'])
  },
  methods: {
    ...mapActions('vaccinum', ['changeStock']),
    increaseStock (vaccine) {
      this.changeStock({ name: vaccine.name, amount: 1 })
    },
    decreaseStock (vaccine) {
      if (vaccine.stock > 0) {
        this.changeStock({ name: vaccine.name, amount: -1 })
      }
    },
    editStock (index, vaccine) {
      this.editingIndex = index;
      this.inputValue = vaccine.stock;
      this.$nextTick(() => {
        this.$refs.inputRef.focus();
      });
    },
    saveChanges (index, vaccine) {
      const changeAmount = this.inputValue - vaccine.stock;
      this.changeStock({ name: vaccine.name, amount: changeAmount })
      this.editingIndex = -1;
    }
  }
};
</script>

<style scoped>
.edit-container {
  display: flex;
  align-items: center;
}

.edit-container .el-input {
  flex: 1;
  margin-right: 10px;
}
</style>
