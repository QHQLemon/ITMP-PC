<template>
  <div class="case-left">
    <div class="case-choose-tab">
      <span @click="changeActive(0)" :class="caseType == '' ? 'active' : ''">全部</span>
      <span
        v-for="(item, index) in themeList "
        :key="index"
        @click="changeActive(item.themeTitle)"
        :class="caseType == item.themeTitle ? 'active' : ''"
      >{{item.themeName}}</span>
    </div>
    <div class="case-show-container" v-if="caseList.length !== 0 ">
      <case-item v-for="(item, index) in caseList" :key="index" :caseItem="item"></case-item>
      <paging-plugin :myPage="nowPage" :pagingList="pagingList" :pageNum="pageNum" @changePage="changeNowPage"></paging-plugin>
    </div>
    <div class="no-case-item" v-else>
      <div class="no-data">
        <p>找不到数据，刷新一下</p>
      </div>
    </div>
  </div>
</template>

<script>
import caseItem from "./caseItem";
import pagingPlugin from "@/components/paging/pagingPlugin";
export default {
  components: {
    caseItem,
    pagingPlugin
  },
  data() {
    return {
      nowPage: 1,
      pagingList: [],
      pageNum: 0,
      total: "",
      pageSize: 2,
      themeList: [
        { themeTitle: 1, themeName: "项目综合管理" },
        { themeTitle: 2, themeName: "项目范围管理" },
        { themeTitle: 3, themeName: "项目时间管理" },
        { themeTitle: 4, themeName: "项目成本管理" },
        { themeTitle: 5, themeName: "项目质量管理" },
        { themeTitle: 6, themeName: "项目人力资源管理" },
        { themeTitle: 7, themeName: "项目沟通管理" },
        { themeTitle: 8, themeName: "项目风险管理" },
        { themeTitle: 9, themeName: "项目采购管理" },
        { themeTitle: 10, themeName: "项干系人合管理" }
      ],
      chooseIndex: 0,
      caseType: "",
      caseList: [
        {
          case_id: 8,
          case_type: 1,
          case_title: "IT项目的特点与规划",
          case_content:
            "<p>【案例1】考虑下列问题：</p><p>Ø&nbsp;编辑一个版报纸</p><p>Ø&nbsp;在火星上投放机器人设备搜索生命迹象</p><p>Ø&nbsp;准备结婚</p><p>Ø&nbsp;改进财务计算机系统以处理通用的欧币问题</p><p>Ø&nbsp;开发优秀人机界面的研究项目</p><p>Ø&nbsp;对用户使用计算机系统时出现的问题的原因进行调查</p><p>Ø&nbsp;为计算领域学生分配第二年的编程任务</p><p>Ø&nbsp;为一台新计算机编制操作系统</p><p>Ø&nbsp;在组织中安装新版本的字处理软件包</p><p>\t其中，有些用“项目”描述可能比其他更合适。把它们按照最接近你的构成项目的概念的顺序排列起来，越在上面，越符合“项目”的概念。并说明与上一条作为项目的不同点。</p>",
          case_answer:
            "<p>【参考答案1.1】答案不唯一，一种可能的顺序如下：</p><p>Ø&nbsp;在火星上投放机器人设备搜索生命迹象</p><p>Ø&nbsp;为一台新计算机编制操作系统</p><p>Ø&nbsp;改进财务计算机系统以处理通用的欧币问题</p><p>Ø&nbsp;在组织中安装新版本的字处理软件包</p><p>Ø&nbsp;对用户使用计算机系统时出现的问题的原因进行调查</p><p>Ø&nbsp;准备结婚</p><p>Ø&nbsp;开发优秀人机界面的研究项目</p><p>Ø&nbsp;编辑一个版报纸</p><p>Ø&nbsp;为计算领域学生分配第二年的编程任务</p>",
          case_ctime: "2019-04-06T04:07:52.000Z",
          case_media_path:
            "http://ppdzfcm6e.bkt.clouddn.com/course_video_demo.mp4",
          case_ppt: "http://ppdzfcm6e.bkt.clouddn.com/jQueryxin.pptx",
          media_type: 1,
          case_enshrine_num: 0,
          case_author: "佚名"
        },
        {
          case_id: 9,
          case_type: 2,
          case_title: " IT项目的立项与评价",
          case_content:
            "<p>【案例2】评论一下下面对软件开发者的“目的”的用词是否适当：</p><p>\t\t\t\t⑴在预算内按时实现新的应用。</p><p>\t\t\t\t⑵实现新的软件应用，并尽可能地只有少量可能导致运行故障的软件错误。</p><p>\t\t\t\t⑶设计一个用户友好系统。</p><p>\t\t\t\t⑷为新系统编写充分的文档。</p><p><br></p><p>【问题讨论1】&nbsp;关于项目章程和项目经理委派书</p><p>【问题讨论2】项目经理在参与售前支持阶段活动的过程中，由于所处的立场不同，有时候会和销售经理的意见发生冲突。这种情况如何处题？</p><p>【问题讨论3】有时候在合同还没有正式签订的时候，客户就提出提前进行项目的实施的要求。这种情况如何处理？</p><p>【问题讨论4】&nbsp;降价对项目成本预算的影响</p>",
          case_answer:
            "<p>【参考答案2.1】在每种情况下要提出的意见和疑问是：</p><p>⑴实际时间和预算量要详细说明到什么样的程度？最终期限和预算约束通常必须按要交付功能的范围和质量来设置。例如：如果最终期限无法达到，那么客户愿意延期而要求交付完整的功能集，还是在最终期限时交付基本的功能子集？</p><p>⑵“尽可能地只有少量错误”并不准确。去掉错误需要工作量，因而需要钱。如果花许多钱和时间去减少错误，开发人员愿意吗？</p><p>⑶“用户友好”实际意味着什么？如何度量？通常“易于使用”是按用户执行标准操作所花的时间来度量的，而“易于学习”是按初学者在执行标准操作时达到精通的程度所花的时间来度量的。</p><p>⑷“充分的”文档意味着什么？也许用目标格式编排表示法来产生文档类型列表更有用。</p><p><br></p><p>【问题讨论1】&nbsp;关于项目章程和项目经理委派书</p><p>\t项目章程和项目经理委派是一份文件吗？是在合同签订之前发布呢？还是合同签订之后发布?通常在组织中由谁发布?</p><p>【参考答案】项目章程的主要内容是宣布项日正式开始实施并强调项目所需达到的目标。项目经理委派书的主要内容是对已经宣布要实施的项目正式委派项目经理并明确其权力，有时候项目中其他关键角色的人选也在此文件中进行委派和授权。这两份文件通常在合同签订之后发布，但是由于某种情况公司同意在合同签订之前就开始项目的实施时，则在做出这种提前实施的决定之后就应该马上发布项目章程和项目经理委派书。通常，这两份文件由项目管理部门的经理发布；对那些级别很高或者有特殊意义的项目，则由公司的管理高层发布。有时候，项目经理委派书中的内容可以合并在项目章程中一起发布。</p><p>【问题讨论2】</p><p>&nbsp;&nbsp;&nbsp;项目经理在参与售前支持阶段活动的过程中，由于所处的立场不同，有时候会和销售经理的意见发生冲突。这种情况如何处题？</p><p>【参考答案】项目经理参与售前活动的目的是为项目的成功实施做好铺垫，同时通过自己的项目经验尽最大可能帮助销售经理赢得合同。一般来讲，项目经理和销售经理在配合当中发生冲突的主要原因是山于各自的立场不同造成的：销售经理的主要职责是完成销售额，项目经理的主要职责是完成既定的项目目标。在售前活动中，销售经理为了获取订单，容易做出不切实际的承诺，包括在进度方面、价格方面、性能方面等的承诺；而项目经理着重于日后项目的可执行性，所以对方案中不太现实的地方会据理力争，提出反对意见，以致造成冲突。针对这种情况，应该从以下几个方面进行考虑：</p><p>⑴统一目标&nbsp;无论项目经理还是销售经理,在售前活动中都要表现出团队合作的精神,不要只考虑白己的小团队利益,也不能只考虑眼前利益。大家的最终目标其实是一致的，即服务客户、让客户满意。</p><p>(2)群策群力&nbsp;&nbsp;对于出现的问题，大家应该集思广益、群策群力，寻找积极的解决方案，而不是互相推诿。</p><p>⑶在公司的流程中，扩大销售经理和项目经理的职责范围, 项目经理应该参与合同签订之前的工作,销售经理的职责也应该延伸到合同签订之后。有的公司在考评销售经理的绩效时包括了订单额、预期利润额、实际利润额、应收款项等诸多指标、通过这种方法保证项目的可实施性和公司业务的良性循环。</p><p>【问题讨论3】</p><p>&nbsp;&nbsp;&nbsp;有时候在合同还没有正式签订的时候，客户就提出提前进行项目的实施的要求。这种情况如何处理？</p><p>【参考答案】讨论：这种情况的发生有一定的普遍性，通常是出于以下几种原因：</p><p>Ø&nbsp;客户对卖方的产品或服务没有使用经验，不放心。希望能先“看货”，再决定“买还是不买”。</p><p>Ø&nbsp;客户已经选定了卖方，但是出于内部复杂的合同审批手续，使得合同签署不能马上完成。但是项目的工期要求又迫在眉睫，不得不要求提前实施。</p><p>Ø&nbsp;客户业务需求非常急迫，比如一些扩容项目，不马上提供相应的产品或服务，就有可能影响到他们的用户，或者是造成很大的经济损失。</p><p>\t⑴在上述第一种情况中存在的风险较大，客户可能会对你所交付的产品和服务不满意而拒绝和你继续签订合同，导致你在前期的投入无法撤回而遭受损失。但是当今激烈的市场竞争又使你不得不去冒险，否则从一开始你就放弃了被选择的机会。在这种情况下，可以通过积极引导客户参观以往成功案例等方式增强客户的信心。另外一方面，公司内部相关人员要通过分析市场、客户等诸多因素，决定是否接受客户提前实施的要求，如果一旦决定，要明确提前实施的成本的底线值，项目经理一定要在收到公司相关部门对此的审批决议之后才能开始提前实施的工作，同时在这种情况下,项目经理将承受来自公司内外的巨大压力，他的表现在一定程度上决定公司是否最终赢得合同。</p><p>\t⑵在第二种情况和第三种情况中,要邀请公司法律部参与，通过与客户签署备忘录等方式降低由于提前实施而带来的风险。</p><p>&nbsp;&nbsp;&nbsp;同时，在公司内部也要建立相应的审批流程对这种情况下的提前实施、进行批复。通常这种流程包括:</p><p>Ø&nbsp;由销售经理提出申请，阐明提前交付的内容和原因</p><p>Ø&nbsp;由法律部协助和客户签署提前实施备忘录。</p><p>Ø&nbsp;商务部门、项目管理部门经理对提前实施申请进行审查、登记并批复。</p><p>Ø&nbsp;由项目实施部门经理发布项目章程和项目经理委派书，启动项目实施。</p><p>Ø&nbsp;由项目经理根据销售部门的承诺，在实施过程中随时检查合同的签署情况，如果没有在计划的日期内签署，则要重新通过此审批流程。</p><p>【问题讨论4】&nbsp;降价对项目成本预算的影响</p><p>&nbsp;&nbsp;&nbsp;&nbsp;迫于市场竞争的压力，销售人员不得不一再降低报价，在这种情况下，公司分配给项目的预算也应该随之降低，是这样吗？</p><p>价格基本上由两大部分组成，即成本和利润。成本由项目的工作范围决定，只有工作范围发生变化的时候，成本才会发生相应的变化。如果公司决定降低价格，则与此对应的是项目的预期利润率降低,而不应该因此而削减已经承诺的工作范围和工作质量，即不应该削减项目的成本预算。</p><p>&nbsp;&nbsp;&nbsp;&nbsp;同时,在保证了预期项目范围和质量的前提下，项目经理可以通过其他科学的方法降低项目成本，为公司的利润做贡献，比如：可以使用更加科学的方式管理项目，避免问题的出现，减少项目成本风险预留的使用；还可以采取更加科学的、创新的工作方式，提高效率，降低成本。</p>",
          case_ctime: "2019-04-06T04:15:24.000Z",
          case_media_path:
            "http://ppdzfcm6e.bkt.clouddn.com/case_music_demo.mp3",
          case_ppt: "",
          media_type: 2,
          case_enshrine_num: 0,
          case_author: "五组"
        },
        {
          case_id: 10,
          case_type: 3,
          case_title: "项目可行性分析报告",
          case_content:
            "<p>【案例3】A公司是一家小型IT公司，公司与B大学初步商定，欲以B大学已通过鉴定的863项目“网络游戏监管关键技术研究”的主要成果为基础，双方合作开发“网络游戏监管系统”。因开发资金不足，A公司决定申请科技型中小企业技术创新基金。A公司组织有关人员编写了项目可行性分析报告，报告省科技厅审查。省科技厅高新技术处张处长仔细审查了项目可行性分析报告，发现有以下问题：</p><p>⑴关于“项目投资来源”，项目可行性分析报告中是这样叙述的：</p><p>1)项目总投资预算为250万元；</p><p>2)申请国家技术创新基金100万元；</p><p>3)地方政府已承诺，在项目立项之后按照国家实际批准基金支付额度为50%匹配地方资金(附地方政府文件)；</p><p>4)公司股东大会已通过决议，在项目立项之后为该项目投资100万元(附资金来源证明和公司股东大会决议)。</p><p>张处长认为，“项目投资来源有重大遗漏”。</p><p>⑵关于“项目技术来源”，项目可行性分析报告中是这样叙述的：</p><p>1)以B大学已通过鉴定的863项目“网络游戏监管关键技术研究”的主要成果为基础；</p><p>2)A、B双方合作进一步开发，完成这一研究成果的产品化。</p><p>张处长认为，“项目技术来源”还有几个问题需要明确。</p><p>⑶项目可行性分析只分析了项目技术的先进性，未分析项目技术的成熟性。</p><p>张处长认为，应当补充项目技术的成熟性分析。</p><p>【问题1】请分析“项目资金来源”有何重大遗漏？应如何改正？</p><p>【问题2】请分析“项目技术来源”还有哪几个问题需要明确？</p><p>【问题3】应从哪几个方面分析项目技术的成熟性？</p>",
          case_answer:
            "<p>【参考答案】<strong>问题1：</strong></p><p>\t通常，一个信息系统项目的投资可来自以下几个方面：</p><p>⑴&nbsp;国家（或部，省，市）科技计划资金；</p><p>⑵&nbsp;地方（或部门）匹配资金；</p><p>⑶&nbsp;企业（单位）自筹资金；</p><p>⑷&nbsp;客户（用户）的委托开发资金或系统资金；</p><p>⑸&nbsp;银行贷款。 </p><p>\t本项目中申请国家技术创新基金为100万元，但国家实际批准基金额度很可能会低于100万元，所以“项目投资来源”中应当说明：当国家实际批准基金低于申请额度时，如何补足二者之间的差额，以及由此所引起的地方匹配基金的额度。</p><p>\t应重新召开股东大会并讨论以下议题：当国家实际批准基金低于申请额度时，公司是否愿意补足二者之间的差额以及由此所引起的地方匹配基金的额度。</p><p>\t如果能通过，应在“项目投资来源”中加注：当国家实际批准基金低于申请额度时，公司承诺补足二者之间的差额以及由此所引起的地方匹配基金的额度（附新的公司股东大会决议）。</p><p>\t<strong>问题2：</strong></p><p>\tA、B双方以B方现有技术成果为基础进一步合作开发，应明确以下几个主要问题：</p><p>⑴&nbsp;B方是以现有技术成果折价入股，还是将现有技术成果转让给A方？</p><p>⑵&nbsp;如果是“技术转让”，应明确是“专利权转让”、“专利实施许可”还是“技术秘密转让”？</p><p>⑶&nbsp;双方是否已就合作开发的新技术成果的所有权、使用权以及利益分成问题达成一致意见？</p><p>⑷&nbsp;双方是否已正式签订“合作开发合同”或“技术转让”合同？</p><p>\t<strong>问题3：</strong></p><p>\t应主要从以下几个方面分析项目技术的成熟度：</p><p>⑴&nbsp;关键技术成熟性分析（包括采用的现有成熟度关键技术、已攻克的关键技术、待研究的关键技术等）。</p><p>⑵&nbsp;项目采用的关键技术是否获得国家、部门（省部级以上）或地方科技计划的支持（已获得、尚未获得）、计划的名称、获得支持的时间。</p><p>⑶&nbsp;项目采用的关键技术是否通过技术鉴定（已鉴定、尚未鉴定）、鉴定单位、鉴定意见、鉴定时间。</p>",
          case_ctime: "2019-04-06T04:19:32.000Z",
          case_media_path:
            "http://ppdzfcm6e.bkt.clouddn.com/course_video_demo.mp4",
          case_ppt: "",
          media_type: 1,
          case_enshrine_num: 0,
          case_author: "梁"
        }
      ]
    };
  },
  methods: {
    getPagingList() {
      this.pagingList = [];
      this.pageNum = (this.total + this.pageSize - 1) / this.pageSize;
      if (this.nowPage > 2) {
        this.pagingList.push({
          text: this.nowPage - 2,
          page: this.nowPage - 2
        });
      }
      if (this.nowPage > 1) {
        this.pagingList.push({
          text: this.nowPage - 1,
          page: this.nowPage - 1
        });
      }

      this.pagingList.push({ text: this.nowPage, page: this.nowPage });

      if (this.nowPage + 1 <= this.pageNum) {
        this.pagingList.push({
          text: this.nowPage + 1,
          page: this.nowPage + 1
        });
      }
      if (this.nowPage + 2 <= this.pageNum) {
        this.pagingList.push({
          text: this.nowPage + 2,
          page: this.nowPage + 2
        });
      }
    },
    changeNowPage(page) {
      this.nowPage = page;
      this.getCaseByPage();
    },
    changeActive(index) {
      if (index == 0) {
        this.caseType = "";
      } else {
        this.caseType = index;
      }
      this.getCaseByPage();
    },
    getCaseByPage() {
      let self = this;
      axios
        .get("/getCaseByPage", {
          params: {
            case_type: self.caseType,
            page: self.nowPage,
            rows: self.pageSize
          }
        })
        .then(function(response) {
          self.caseList = response.data.data.rows;
          self.total = response.data.data.total;
          console.log("------case-list----", self.total);
          self.getPagingList();
        })
        .catch(function(err) {
          console.log(err);
        });
    }
  },
  mounted() {
    this.getCaseByPage();
  }
};
</script >

<style scoped>
.case-left {
  margin-bottom: 100px;
}
.case-choose-tab {
  width: 100%;
  background: #fff;
  padding: 10px 10px 5px;
}
.case-choose-tab span {
  cursor: pointer;
  padding: 5px 15px;
  vertical-align: middle;
  display: inline-block;
  margin-left: 5px;
  margin-top: 5px;
}
.case-choose-tab span.active {
  background: #db6f6a;
  color: #fff;
  border-radius: 20px;
}
.case-show-container {
  margin-top: 30px;
  background: #fff;
  padding: 10px;
  padding-bottom: 50px;
  min-height: 600px;
}
.no-case-item {
  margin-top: 30px;
  background: #fff;
  padding: 10px;
  padding-bottom: 50px;
  min-height: 600px;
}
.no-case-item .no-data {
  height: 300px;
  width: 350px;
  margin: 50px auto;
  background-image: url("../../assets/img/暂无数据.png");
  background-size: 200px;
  background-repeat: no-repeat;
  opacity: 0.3;
}
.no-case-item .no-data p {
  line-height: 200px;
  text-align: right;
  font-size: 20px;
  font-weight: 600;
  color: #333;
}
</style>
