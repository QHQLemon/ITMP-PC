<template>
  <div class="personal-container">
    <div class="personal-data-conatainer">
      <div class="container">
        <div class="personal-header">
          <img src="../assets/img/aa.png" alt>
          <div class="personal-info">
            <div>
              <span>{{user.student_name ? user.student_name : user.admin_name}}</span>
            </div>

            <div>
              <span>{{user.student_id ? user.student_id : user.admin_id}}</span>
            </div>

            <div>
              <span>{{user.student_class_id ? user.student_class_id : ""}}</span>
            </div>
          </div>
          <div class="personal-data">
            <div class="thumbs-up">
              <span class="glyphicon glyphicon-thumbs-up"></span>
            </div>
            <div class="thumbs-up-desc">
              <div class="data-name">获赞</div>
              <div class="data-num">{{topicLikeNum}}</div>
            </div>
            <span class="data-line"></span>
            <div class="reply">
              <span class="glyphicon glyphicon-edit"></span>
            </div>
            <div class="reply-desc">
              <div class="data-name">主题</div>
              <div class="data-num">{{topicList.length}}</div>
            </div>
            <span class="data-line"></span>
            <div class="case">
              <span class="glyphicon glyphicon-star-empty"></span>
            </div>
            <div class="case-desc">
              <div class="data-name">关注案例</div>
              <div class="data-num">{{enshrineList.length}}</div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="personal-content">
      <personal-tab :topicList="topicList" :enshrineList="enshrineList" :replyList="replyList"></personal-tab>
    </div>
  </div>
</template>

<script>
import personalTab from "@/components/personal/personalTab";
export default {
  data() {
    return {
      userId: "",
      topicList: [
        {
          topic_id: 9,
          topic_type: 2,
          topic_title: "强强强",
          topic_content: "<p>牛</p>",
          topic_ctime: "2019-04-16T02:43:49.000Z",
          topic_look: 4,
          topic_reply: 1,
          topic_like: 8,
          user_id: 1511240134,
          user_name: "lemon"
        },
        {
          topic_id: 10,
          topic_type: 2,
          topic_title: "lemonlemon",
          topic_content: "<p>ok</p>",
          topic_ctime: "2019-04-16T02:44:08.000Z",
          topic_look: 1,
          topic_reply: 0,
          topic_like: 1,
          user_id: 1511240134,
          user_name: "lemon"
        }
      ],
      enshrineList: [
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
          case_enshrine_num: 1,
          case_author: "五组"
        },
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
          case_enshrine_num: 1,
          case_author: "佚名"
        }
      ],
      replyList: [
        // {
        //   reply_id: 12,
        //   topic_id: 9,
        //   from_id: 1511240134,
        //   from_name: "lemon",
        //   reply_time: "2019-04-16T02:44:18.000Z",
        //   reply_content: "<p>哈哈哈</p>",
        //   reply_to_id: null
        // },
        // {
        //   reply_id: 13,
        //   topic_id: null,
        //   from_id: 1511240134,
        //   from_name: "lemon",
        //   reply_time: "2019-04-16T02:44:28.000Z",
        //   reply_content: "当当当",
        //   reply_to_id: 12
        // }
      ],
      user: {
        // student_id: "1511240134",
        // student_name: "lemon",
        // student_pwd: "123456",
        // student_class_id: 1
      }
    };
  },
  computed: {
    topicLikeNum() {
      let num = 0;
      this.topicList.forEach((ele, index) => {
        num += parseInt(ele.topic_like);
      });
      return num;
    }
  },
  components: {
    personalTab
  },
  methods: {
    getUserMsg() {
      let self = this;
      axios
        .post("/getUserMsg", {
          params: {
            user_id: self.userId
          }
        })
        .then(function(response) {
          self.user = response.data.data[0];
        })
        .catch(function(error) {
          console.log(error);
        });
    },
    getEnshrineByUserId() {
          $.bootstrapLoading.end();

      let self = this;
      axios
        .post("/getEnshrineByUserId", {
          params: {
            user_id: self.userId
          }
        })
        .then(function(response) {
          self.enshrineList = response.data.data;
          $.bootstrapLoading.end();
        })
        .catch(function(error) {
          console.log(error);
        });
    },
    getReplyByUserId() {
      let self = this;
      axios
        .post("/getReplyByUserId", {
          params: {
            user_id: self.userId
          }
        })
        .then(function(response) {
          self.replyList = response.data.data;
        })
        .catch(function(error) {
          console.log(error);
        });
    },

    getTopicByUserId() {
      let self = this;
      axios
        .post("/getTopicByUserId", {
          params: {
            user_id: self.userId
          }
        })
        .then(function(response) {
          self.topicList = response.data.data;
        })
        .catch(function(error) {
          console.log(error);
        });
    }
  },
  mounted() {
    this.userId = localStorage.getItem("user_id");
    this.getUserMsg();
    this.getEnshrineByUserId();
    this.getReplyByUserId();
    this.getTopicByUserId();
    $.bootstrapLoading.start();
  }
};
</script >

<style scoped>
.personal-container {
  width: 100%;
  margin-top: -20px;
}
.personal-data-conatainer {
  width: 100%;
  height: 220px;
  background: #db6f6a;
}
.personal-data-conatainer img {
  height: 96px;
  width: 96px;
  margin-top: 50px;
  margin-left: 50px;
  vertical-align: top;
}
.personal-info {
  display: inline-block;
  width: 300px;
  margin-top: 50px;
  padding: 10px;
}
.personal-data-conatainer .personal-info span {
  display: inline-block;
  font-size: 16px;
  color: #fff;
  line-height: 1.7em;
}
.personal-data {
  display: inline-block;
  width: 400px;
  color: #fff;
  height: 220px;
  vertical-align: top;
  padding-top: 90px;
  margin-left: 250px;
}
.personal-data .thumbs-up,
.thumbs-up-desc,
.reply,
.reply-desc,
.case,
.case-desc {
  display: inline-block;
}
.personal-data .thumbs-up,
.reply,
.case {
  height: 50px;
  width: 50px;
  font-size: 36px;
}
.data-line {
  display: inline-block;
  height: 36px;
  width: 0;
  border-left: 1px solid #fff;
  margin: 0 20px;
}
.personal-content {
  min-height: 800px;
}
</style>
